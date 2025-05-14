import User from './user.js';
import Season from './season.js';
import Series from './series.js';

class FantasyBet {
    constructor(data = {}) {
        this.id = data.id || null;
        this.series_id = data.series_id || null;
        this.series = data.series ? new Series(data.series) : null;
        this.season_id = data.season_id || null;
        this.season = data.season ? new Season(data.season) : null;
        this.user_id = data.user_id || null;
        this.user = data.user ? new User(data.user) : null;
        this.winner_id = data.winner_id || null;
        this.winner = data.winner ? new User(data.winner) : null;
        this.bet_points = data.bet_points || 0;
        this.bet_result = data.bet_result || null;
    }

    toObject() {
        return {
            id: this.id,
            series_id: this.series_id,
            season_id: this.season_id,
            user_id: this.user_id,
            winner_id: this.winner_id,
            bet_points: this.bet_points,
            bet_result: this.bet_result
        };
    }

    toString() {
        return `FantasyBet(id=${this.id}, series=${this.series}, season=${this.season}, ` +
               `user=${this.user}, winner=${this.winner}, bet_points=${this.bet_points}, bet_result=${this.bet_result})`;
    }
}

export default FantasyBet;