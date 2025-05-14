import User from './user.js';
import SeasonInfo from './season_info.js';

class Team {
    constructor(data = {}) {
        this.id = data.id || null;
        this.name = data.name || '';
        this.icon = data.icon || '';
        this.discordRole = data.discord_role || '';
        
        this.playersBySeason = {};
        if (data.player_by_season) {
            for (const [seasonId, players] of Object.entries(data.player_by_season)) {
                this.playersBySeason[seasonId] = players.map(player => new User(player));
            }
        }

        this.seasonsInfo = Array.isArray(data.seasons_info) 
            ? data.seasons_info.map(seasonInfo => new SeasonInfo(seasonInfo)) 
            : [];
    }

    toObject() {
        return {
            name: this.name,
            icon: this.icon,
            discordRole: this.discordRole
        };
    }

    toString() {
        const playersBySeasonStr = Object.entries(this.playersBySeason)
            .map(([seasonId, players]) => `${seasonId}: [${players.join(', ')}]`)
            .join(', ');

        const seasonsInfoStr = this.seasonsInfo.length 
            ? this.seasonsInfo.map(seasonInfo => seasonInfo.toString()).join(', ') 
            : 'None';

        return `Team(id=${this.id}, name=${this.name}, icon=${this.icon}, discordRole=${this.discordRole}, ` +
               `playersBySeason={${playersBySeasonStr}}, seasonsInfo=[${seasonsInfoStr}])`;
    }
}