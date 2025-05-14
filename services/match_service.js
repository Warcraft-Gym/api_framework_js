import Match from '../model/match.js';
import BaseGNLBackendService from './base_service.js';

class MatchService extends BaseGNLBackendService {
    async getMatch(matchId) {
        console.debug(`Fetching match with ID: ${matchId}`);
        const result = await this.get(`matches/${matchId}`);
        console.debug(`Received response:`, result);
        return new Match(result);
    }

    async updateMatch(matchId, matchInstance) {
        if (!matchInstance || !matchId) {
            console.error(`Match or match ID not defined:`, matchInstance);
            throw new Error(`Match or match ID not defined: ${matchInstance}`);
        }
        console.debug(`Updating match with ID: ${matchId}, data:`, matchInstance.toObject());
        const result = await this.put(`matches/${matchId}`, matchInstance.toObject());
        console.debug(`Received response:`, result);
        return new Match(result);
    }

    async createMatch(matchInstance) {
        if (!matchInstance) {
            console.error(`Match not defined:`, matchInstance);
            throw new Error(`Match not defined: ${matchInstance}`);
        }
        console.debug(`Creating new match with data:`, matchInstance.toObject());
        const result = await this.post(`matches`, matchInstance.toObject());
        console.debug(`Received response:`, result);
        return new Match(result);
    }

    async deleteMatch(matchId) {
        if (!matchId) {
            console.error(`Match ID not defined: ${matchId}`);
            throw new Error(`Match ID not defined: ${matchId}`);
        }
        console.debug(`Deleting match with ID: ${matchId}`);
        await this.delete(`matches/${matchId}`);
        console.debug(`Match with ID ${matchId} deleted successfully`);
        return true;
    }

    async searchMatches(searchString) {
        if (!searchString) {
            console.error(`Search String not defined: ${searchString}`);
            throw new Error(`Search String not defined: ${searchString}`);
        }
        console.debug(`Searching matches with query: ${searchString}`);
        const matches = await this.search(`matches/search`, searchString);
        console.debug(`Received response:`, matches);
        return matches.map(matchData => new Match(matchData));
    }
}

export default MatchService;