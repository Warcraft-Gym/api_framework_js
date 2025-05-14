import Season from './season.js';

class SeasonInfo {
    constructor(data = {}) {
        this.seasonId = data.season_id || null;
        this.final_score = data.final_score || null;
        this.points_available = data.points_available || null;
        this.points_against = data.points_against || null;
        this.season = data.season ? new Season(data.season) : null;
    }

    toString() {
        return `SeasonInfo(seasonId=${this.seasonId}, final_score=${this.final_score}, ` +
               `points_available=${this.points_available}, points_against=${this.points_against}, ` +
               `season=${this.season})`;
    }
}
export default SeasonInfo;
