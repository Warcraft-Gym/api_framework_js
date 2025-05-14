import Team from './team.js';
import Season from './season.js';
import Map from './map.js';

class Match {
    constructor(data = {}) {
        this.id = data.id || null;
        this.team1_id = data.team1_id || null;
        this.team1 = data.team1 ? new Team(data.team1) : null;
        this.team2_id = data.team2_id || null;
        this.team2 = data.team2 ? new Team(data.team2) : null;
        this.season_id = data.season_id || null;
        this.season = data.season ? new Season(data.season) : null;
        this.playday = data.playday || null;
        this.date_frame = data.date_frame || null;
        this.fixed_map_id = data.fixed_map_id || null;
        this.fixed_map = data.fixed_map ? new Map(data.fixed_map) : null;
        this.team1_score = data.team1_score || null;
        this.team2_score = data.team2_score || null;
    }

    toObject() {
        return {
            team1_id: this.team1_id,
            team2_id: this.team2_id,
            season_id: this.season_id,
            playday: this.playday,
            date_frame: this.date_frame,
            fixed_map_id: this.fixed_map_id,
            team1_score: this.team1_score,
            team2_score: this.team2_score
        };
    }

    toString() {
        return `Match(id=${this.id}, team1_id=${this.team1_id}, team1=${this.team1}, team1_score=${this.team1_score}, ` +
               `team2_id=${this.team2_id}, team2=${this.team2}, team2_score=${this.team2_score}, ` +
               `season_id=${this.season_id}, season=${this.season}, playday=${this.playday}, ` +
               `date_frame=${this.date_frame}, fixed_map_id=${this.fixed_map_id}, fixed_map=${this.fixed_map})`;
    }
}
export default Match;
