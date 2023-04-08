import { setupServer } from 'msw/node';
import handlers from './handlers';

// Here we import the handler created!
const server = setupServer(...handlers);
export default server;
