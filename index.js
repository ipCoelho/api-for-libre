import Express from 'express';

const api = Express();
const apiPort = 3030;

api.listen(apiPort, () => {
    console.log(`\nAPI listening the port ${apiPort}`);
});