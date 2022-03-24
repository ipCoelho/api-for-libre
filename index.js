import express from 'express';
import router from './controller/UserController.js';

const API = express(), API_PORT = 3030;

API.listen(API_PORT, () => console.log(`API: Root: "http://localhost:${API_PORT}/"`));
API
    .use(express.json())
    .use('/', router)
;

