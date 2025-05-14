import Team from './team.js';
import Season from './season.js';
import Map from './map.js';

class Match {
    constructor(data = {}) {
        this.id = data.id || null;
        this.team1Id = data.team1_id || null;
        this.team1 = data.team1 ? new Team(data.team1) : null;
        this.team2Id = data.team2_id || null;
        this.team2 = data.team2 ? new Team(data.team2) : null;
        this.seasonId = data.season_id || null;
        this.season = data.season ? new Season(data.season) : null;
        this.playday = data.playday || null;
        this.dateFrame = data.date_frame || null;
        this.fixedMapId = data.fixed_map_id || null;
        this.fixedMap = data.fixed_map ? new Map(data.fixed_map) : null;
        this.team1Score = data.team1_score || null;
        this.team2Score = data.team2_score || null;
    }

    toObject() {
        return {
            team1Id: this.team1Id,
            team2Id: this.team2Id,
            seasonId: this.seasonId,
            playday: this.playday,
            dateFrame: this.dateFrame,
            fixedMapId: this.fixedMapId,
            team1Score: this.team1Score,
            team2Score: this.team2Score
        };
    }

    toString() {
        return `Match(id=${this.id}, team1Id=${this.team1Id}, team1=${this.team1}, team1Score=${this.team1Score}, ` +
               `team2Id=${this.team2Id}, team2=${this.team2}, team2Score=${this.team2Score}, ` +
               `seasonId=${this.seasonId}, season=${this.season}, playday=${this.playday}, ` +
               `dateFrame=${this.dateFrame}, fixedMapId=${this.fixedMapId}, fixedMap=${this.fixedMap})`;
    }
}
export default Match;
