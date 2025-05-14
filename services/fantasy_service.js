import FantasyTeam from '../model/FantasyTeam.js';
import BaseGNLBackendService from './BaseGNLBackendService.js';

class FantasyService extends BaseGNLBackendService {
    async calculateSeason(seasonId) {
        console.debug(`Calculating fantasy scores for season ID: ${seasonId}`);
        const result = await this.post(`fantasy/season/${seasonId}/calculate`, null);
        console.debug(`Received response:`, result);
        return true;
    }
}

export default FantasyService;