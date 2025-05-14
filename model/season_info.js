import Season from './season.js';

class SeasonInfo {
    constructor(data = {}) {
        this.seasonId = data.season_id || null;
        this.finalScore = data.final_score || null;
        this.pointsAvailable = data.points_available || null;
        this.pointsAgainst = data.points_against || null;
        this.season = data.season ? new Season(data.season) : null;
    }

    toString() {
        return `SeasonInfo(seasonId=${this.seasonId}, finalScore=${this.finalScore}, ` +
               `pointsAvailable=${this.pointsAvailable}, pointsAgainst=${this.pointsAgainst}, ` +
               `season=${this.season})`;
    }
}