import Team from './team.js';
import User from './user.js';
import Season from './season.js';

class FantasyTeam {
    constructor(data = {}) {
        this.id = data.id || null;
        this.name = data.name || '';
        this.seasonId = data.season_id || null;
        this.season = data.season ? new Season(data.season) : null;
        this.captainId = data.captain_id || null;
        this.captain = data.captain ? new User(data.captain) : null;
        this.draftedTeamId = data.drafted_team_id || null;
        this.draftedTeam = data.drafted_team ? new Team(data.drafted_team) : null;
        this.draftedRace = data.drafted_race || '';
        this.draftedPlayers = Array.isArray(data.drafted_players) ? data.drafted_players.map(player => new User(player)) : [];
        this.playerPoints = data.player_points || 0;
        this.benchPoints = data.bench_points || 0;
        this.teamPoints = data.team_points || 0;
        this.racePoints = data.race_points || 0;
        this.betPoints = data.bet_points || 0;
        this.totalPoints = data.total_points || 0;
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            seasonId: this.seasonId,
            captainId: this.captainId,
            draftedTeamId: this.draftedTeamId,
            draftedRace: this.draftedRace,
            playerPoints: this.playerPoints,
            benchPoints: this.benchPoints,
            teamPoints: this.teamPoints,
            racePoints: this.racePoints,
            betPoints: this.betPoints,
            totalPoints: this.totalPoints
        };
    }

    toString() {
        const draftedPlayersStr = this.draftedPlayers.length ? this.draftedPlayers.map(player => player.toString()).join(', ') : 'None';
        return `FantasyTeam(id=${this.id}, name=${this.name}, captain=${this.captain}, draftedTeam=${this.draftedTeam}, ` +
               `draftedPlayers=[${draftedPlayersStr}], draftedRace=${this.draftedRace}, season=${this.season}, ` +
               `playerPoints=${this.playerPoints}, benchPoints=${this.benchPoints}, teamPoints=${this.teamPoints}, ` +
               `racePoints=${this.racePoints}, betPoints=${this.betPoints}, totalPoints=${this.totalPoints})`;
    }
}

export default FantasyTeam;