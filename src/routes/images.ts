import * as express from 'express';
import { Request, Response } from 'express';
import { query } from '../initDB';

const router = express.Router();

// TODO: Add auth
router.get('/', (req: Request, res: Response): void => {
    res.send(JSON.stringify('Send a request to the backend'));
});

router.get(
    '/all',
    async (req: Request, res: Response): Promise<void> => {
        try {
            const all = await query('SELECT * FROM IMAGES;');
            res.send(all.rows);
        } catch (error: unknown) {
            console.error(error);
            res.send(JSON.stringify(error));
        }
    }
);

router.get(
    '/id/:id',
    async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id;
            const image = await query(`SELECT * FROM IMAGES WHERE id=${id}`);
            res.send(image.rows);
        } catch (error: unknown) {
            console.error(error);
            res.send(JSON.stringify(error));
        }
    }
);

router.post(
    '/',
    async (req: any, res: Response): Promise<void> => {
        const { title, url, userId } = req.body;
        try {
            await query(`INSERT INTO IMAGES(title, url, user_id) VALUES ('${title}', '${url}', ${userId});`);
            res.send('Posted image successfully');
        } catch (error: unknown) {
            console.error(error);
            res.send(JSON.stringify(error));
        }
    }
);

router.delete(
    '/id/:id',
    async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;
        try {
            await query(`DELETE FROM IMAGES WHERE id=${id};`);
            res.send('Deleted image successfully');
        } catch (error: unknown) {
            console.log(error);
            res.send(JSON.stringify(error));
        }
    }
);

// Put Request (change title or url)
router.put(
    '/id/:id',
    async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;
        const { title, url } = req.body;
        console.log(title, url);
    }
);

export default router;
