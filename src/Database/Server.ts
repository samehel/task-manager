import express, { Request, Response } from 'express';
import connectDB from './Connection';
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import '../../dotenv.config.ts'

const app = express();
const port = process.env.VITE_SERVER_PORT;    
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors()); 

const startServer = async () => {
    try {
      await connectDB();
      console.log('MongoDB connected');
    } catch (e) {
      console.error('MongoDB connection error (Server):', e);
      app.use('*', (req: Request, res: Response) => {
        res.redirect('/connection-error'); 
      });
    }
  
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  };
  
  startServer();

app.get('/', (req: Request, res: Response) => {
  res.send('Server is online and running.');
});

app.get('/connection-error', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/Errors/ConnectionError.tsx');
});
