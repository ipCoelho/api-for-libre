import {Router} from "express";
import user from "../model/User.js";

const router = Router();

router.post('/usuario/cadastrar', (request, response) => {
    console.log(request.body);
    const body = request.body;

    user.create({...body}).then(
        response.status(200).json({
            request: {...body},
            message: 'endpoint to register an User.'
        })
    );
});

export default router;