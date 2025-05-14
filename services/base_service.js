import axios from "axios";

export class BaseService {
  async sendRequest({ method, url, data = null, headers = {}, params = {} }) {
    try {
      const response = await axios({
        method,
        url,
        data,
        headers,
        params,
      });

      if ([200, 201].includes(response.status)) {
        return response.data;
      } else if (response.status === 204) {
        return response.statusText;
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (err) {
      throw new Error(`Request failed: ${err.message}`);
    }
  }
}
