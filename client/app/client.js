import rest from 'rest';
import mime from 'rest/interceptor/mime';
import pathPrefix from 'rest/interceptor/pathPrefix';
import errorCode from 'rest/interceptor/errorCode';

const client = rest.wrap(pathPrefix, {prefix: 'http://localhost:3000'})
  .wrap(mime, {mime: 'application/json'})
  .wrap(errorCode);
export default client;
