import Http from '@helpers/Http';
import { APIURL } from '@configurations/Settings';

const servicePath = `${APIURL}/SampleEndpoint`;

class SampleService{
    SampleGet = async () => {
        let response = await Http.Get(`${servicePath}/GetSample`);
        return response;
    }

    SampleGetWithParameters = async (_params) => {
        let response = await Http.Get(`${servicePath}/SampleGetWithParameters?param=${_params}`);
        return response;
    }

    SamplePost = async (_params) => {
        let response = await Http.Post(`${servicePath}/SamplePost`, _params);
        return response;
    }
}
export default SampleService