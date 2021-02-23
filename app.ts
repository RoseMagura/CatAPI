import * as express from 'express';
import * as cors from 'cors';
import { Request, Response } from 'express';

const app: express.Application = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response): void => {
    res.send('Hello world');
});

app.listen(port, (): void => {
    console.log(`App listening at http://localhost:${port}`);
});
