import rest from 'rest';
import mime from 'rest/interceptor/mime';
const client = rest.wrap(mime, {mime: 'application/json'});
export default client;
