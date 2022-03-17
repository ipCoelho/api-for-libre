import Express from 'express';
import user from './model/User.js';

const api = Express();
const apiPort = 3030;
api.listen(apiPort, () => console.log(`\n > API running on the port: ${apiPort}`));

// user.

