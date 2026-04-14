import { Request, Response, NextFunction } from 'express';
import { YoutubeService } from '../services/youtube.service';

const youtubeService = new YoutubeService();

export const searchMusic = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { q } = req.query;
    const results = await youtubeService.search(String(q ?? ''));
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    next(error);
  }
};

export const getMusicById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const song = await youtubeService.getById(req.params.id);
    if (!song) {
      res.status(404).json({ success: false, message: 'Song not found' });
      return;
    }
    res.status(200).json({ success: true, data: song });
  } catch (error) {
    next(error);
  }
};