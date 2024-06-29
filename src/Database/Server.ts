import express, { Request, Response } from 'express';
import connect from './Connection';

const app = express();
const port = 5173;

const startServer = async () => {
    try {
      await connect();
      console.log('MongoDB connected');
    } catch (e) {
      console.error('MongoDB connection error (Server):', e);
      app.get('*', (req: Request, res: Response) => {
        res.redirect('/connection-error'); 
      });
    }
  
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  };
  
  startServer();

app.get('/connection-error', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/Errors/ConnectionError.tsx');
});
