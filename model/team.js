import User from './user.js';
import SeasonInfo from './season_info.js';

class Team {
    constructor(data = {}) {
        this.id = data.id || null;
        this.name = data.name || '';
        this.icon = data.icon || '';
        this.discord_role = data.discord_role || '';
        
        this.player_by_season = {};
        if (data.player_by_season) {
            for (const [seasonId, players] of Object.entries(data.player_by_season)) {
                this.player_by_season[seasonId] = players.map(player => new User(player));
            }
        }

        this.seasons_info = Array.isArray(data.seasons_info) 
            ? data.seasons_info.map(seasonInfo => new SeasonInfo(seasonInfo)) 
            : [];
    }

    toObject() {
        return {
            name: this.name,
            icon: this.icon,
            discord_role: this.discord_role
        };
    }

    toString() {
        const player_by_seasonStr = Object.entries(this.player_by_season)
            .map(([seasonId, players]) => `${seasonId}: [${players.join(', ')}]`)
            .join(', ');

        const seasons_infoStr = this.seasons_info.length 
            ? this.seasons_info.map(seasonInfo => seasonInfo.toString()).join(', ') 
            : 'None';

        return `Team(id=${this.id}, name=${this.name}, icon=${this.icon}, discord_role=${this.discord_role}, ` +
               `player_by_season={${player_by_seasonStr}}, seasons_info=[${seasons_infoStr}])`;
    }
}


export default Team;