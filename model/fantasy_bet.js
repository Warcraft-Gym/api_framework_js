import {User} from './user.js';
import {Season} from './season.js';
import {Series} from './series.js';

class FantasyBet {
    constructor(data = {}) {
        this.id = data.id || null;
        this.seriesId = data.series_id || null;
        this.series = data.series ? new Series(data.series) : null;
        this.seasonId = data.season_id || null;
        this.season = data.season ? new Season(data.season) : null;
        this.userId = data.user_id || null;
        this.user = data.user ? new User(data.user) : null;
        this.winnerId = data.winner_id || null;
        this.winner = data.winner ? new User(data.winner) : null;
        this.betPoints = data.bet_points || 0;
        this.betResult = data.bet_result || null;
    }

    toObject() {
        return {
            id: this.id,
            seriesId: this.seriesId,
            seasonId: this.seasonId,
            userId: this.userId,
            winnerId: this.winnerId,
            betPoints: this.betPoints,
            betResult: this.betResult
        };
    }

    toString() {
        return `FantasyBet(id=${this.id}, series=${this.series}, season=${this.season}, ` +
               `user=${this.user}, winner=${this.winner}, betPoints=${this.betPoints}, betResult=${this.betResult})`;
    }
}

export default FantasyBet;