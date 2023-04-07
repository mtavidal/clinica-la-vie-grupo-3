import { Router } from 'express';

const router = Router();

router.get('/health', (request, response) => {
    response.json({
        message: 'API em funcionamento',
    });
});

export default router;
