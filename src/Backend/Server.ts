import express, { Response } from 'express';
import connectDB from './Connection';
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import '../../dotenv.config.ts'
import Routes from './Routes.ts';

const app = express();

const dbHost = process.env.VITE_DB_HOST
const dbPort = process.env.VITE_SERVER_PORT  

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors()); 
app.use(express.json());

app.use(Routes)

const startServer = async () => {
    try {
      await connectDB();
      console.log('MongoDB connected');
    } catch (e) {
      console.error('MongoDB connection error (Server):', e);
      app.use('*', (_, res: Response) => {
        res.redirect('/connection-error'); 
      });
    }
  
    app.listen(dbPort, () => {
      console.log(`Server running at http://${dbHost}:${dbPort}`);
    });
  };

startServer();

app.get('/', (_, res: Response) => {
  res.send('Server is online and running.');
});

app.get('/connection-error', (_, res: Response) => {
    res.sendFile(__dirname + '/Errors/ConnectionError.tsx');
});
