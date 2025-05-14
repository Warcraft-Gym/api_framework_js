import {User} from './user.js';
import {Match} from './match.js';


class Series {
    constructor(data = {}) {
        this.id = data.id || null;
        this.matchId = data.match_id || null;
        this.match = data.match ? new Match(data.match) : null;
        this.dateTime = data.date_time ? new Date(data.date_time) : null;
        this.caster = data.caster || null;
        this.player1Id = data.player1_id || null;
        this.player1 = data.player1 ? new User(data.player1) : null;
        this.player2Id = data.player2_id || null;
        this.player2 = data.player2 ? new User(data.player2) : null;
        this.player1Score = data.player1_score || null;
        this.player2Score = data.player2_score || null;
        this.player1Points = data.player1_points || null;
        this.player2Points = data.player2_points || null;
        this.hostPlayerId = data.host_player_id || null;
        this.isFantasyMatch = data.is_fantasy_match || false;
    }

    toObject() {
        return {
            matchId: this.matchId,
            dateTime: this.dateTime ? this.dateTime.toISOString() : null,
            caster: this.caster,
            player1Id: this.player1Id,
            player2Id: this.player2Id,
            player1Score: this.player1Score,
            player2Score: this.player2Score,
            player1Points: this.player1Points,
            player2Points: this.player2Points,
            hostPlayerId: this.hostPlayerId,
            isFantasyMatch: this.isFantasyMatch
        };
    }

    toString() {
        return `Series(id=${this.id}, matchId=${this.matchId}, match=${this.match}, ` +
               `dateTime=${this.dateTime}, caster=${this.caster}, ` +
               `player1Id=${this.player1Id}, player1=${this.player1}, ` +
               `player2Id=${this.player2Id}, player2=${this.player2}, ` +
               `player1Score=${this.player1Score}, player2Score=${this.player2Score}, ` +
               `player1Points=${this.player1Points}, player2Points=${this.player2Points}, ` +
               `hostPlayerId=${this.hostPlayerId}, isFantasyMatch=${this.isFantasyMatch})`;
    }
}