import { Request, Response, NextFunction } from 'express';
import { PlaylistService } from '../services/playlist.service';

const playlistService = new PlaylistService();

export const getPlaylist = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const songs = playlistService.getAll();
    res.status(200).json({ success: true, data: songs });
  } catch (error) {
    next(error);
  }
};

export const addToPlaylist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    playlistService.add(req.body);
    res.status(201).json({ success: true, message: 'Song added to playlist' });
  } catch (error) {
    next(error);
  }
};

export const removeFromPlaylist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const removed = playlistService.remove(req.params.id);
    if (!removed) {
      res.status(404).json({ success: false, message: 'Song not found' });
      return;
    }
    res.status(200).json({ success: true, message: 'Song removed from playlist' });
  } catch (error) {
    next(error);
  }
};