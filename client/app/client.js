import rest from 'rest';
import mime from 'rest/interceptor/mime';
import pathPrefix from 'rest/interceptor/pathPrefix';

const client = rest.wrap(pathPrefix, {prefix: 'http://localhost:3000'})
  .wrap(mime, {mime: 'application/json'});
export default client;
