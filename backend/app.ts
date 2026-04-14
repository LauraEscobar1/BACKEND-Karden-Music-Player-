import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { env } from './config/env';
import { errorMiddleware } from './middlewares/error.middleware';
import playlistRoutes from './routes/playlist.routes';
import musicRoutes from './routes/music.routes';
import downloadRoutes from './routes/download.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/playlist', playlistRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/download', downloadRoutes);

app.use(errorMiddleware);

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port} [${env.nodeEnv}]`);
});

export default app;