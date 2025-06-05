import cors from 'cors';
import express, { Request, Response } from 'express';
import 'reflect-metadata';


const PORT = process.env.PORT || 4000;

const main = async () => {
  try {

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req: Request, res: Response) => {
      res.json({ message: 'Hello world' });
    });

    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT 4000`);
    });
  } catch (error) {
    console.error(`Error on starting the server, ${error}`);
    process.exit(1);
  }
};

main().catch((err) => console.error(err));
