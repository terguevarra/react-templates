import Http from '@helpers/Http';
import { MS_GRAPH_API_URL } from '@configurations/Settings';

class BaseService {
  private servicePath = `${MS_GRAPH_API_URL}`;
  private headers = {
    'Content-Type': 'application/json'
  };

  Get = async (_path : string) => {
    return await Http.Get(`${this.servicePath}${_path}`, null, {headers: {...this.headers}});
  }

  GetImage = async (_path : string) => {
    return await Http.Get(`${this.servicePath}${_path}`, null, {
      responseType: 'blob'
    });
  }
}

export default BaseService;