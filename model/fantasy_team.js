import Team from './team.js';
import User from './user.js';
import Season from './season.js';

class FantasyTeam {
    constructor(data = {}) {
        this.id = data.id || null;
        this.name = data.name || '';
        this.season_id = data.season_id || null;
        this.season = data.season ? new Season(data.season) : null;
        this.captain_id = data.captain_id || null;
        this.captain = data.captain ? new User(data.captain) : null;
        this.drafted_team_id = data.drafted_team_id || null;
        this.drafted_team = data.drafted_team ? new Team(data.drafted_team) : null;
        this.drafted_race = data.drafted_race || '';
        this.drafted_players = Array.isArray(data.drafted_players) ? data.drafted_players.map(player => new User(player)) : [];
        this.player_points = data.player_points || 0;
        this.bench_points = data.bench_points || 0;
        this.team_points = data.team_points || 0;
        this.race_points = data.race_points || 0;
        this.bet_points = data.bet_points || 0;
        this.total_points = data.total_points || 0;
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            season_id: this.season_id,
            captain_id: this.captain_id,
            drafted_team_id: this.drafted_team_id,
            drafted_race: this.drafted_race,
            player_points: this.player_points,
            bench_points: this.bench_points,
            team_points: this.team_points,
            race_points: this.race_points,
            bet_points: this.bet_points,
            total_points: this.total_points
        };
    }

    toString() {
        const drafted_playersStr = this.drafted_players.length ? this.drafted_players.map(player => player.toString()).join(', ') : 'None';
        return `FantasyTeam(id=${this.id}, name=${this.name}, captain=${this.captain}, drafted_team=${this.drafted_team}, ` +
               `drafted_players=[${drafted_playersStr}], drafted_race=${this.drafted_race}, season=${this.season}, ` +
               `player_points=${this.player_points}, bench_points=${this.bench_points}, team_points=${this.team_points}, ` +
               `race_points=${this.race_points}, bet_points=${this.bet_points}, total_points=${this.total_points})`;
    }
}

export default FantasyTeam;