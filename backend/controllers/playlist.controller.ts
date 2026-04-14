import { Request, Response, NextFunction } from 'express';
import { PlaylistService } from '../services/playlist.service';

const playlistService = new PlaylistService();

export const getPlaylist = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.status(200).json({
      success: true,
      data: playlistService.getPlaylist()
    });
  } catch (error) {
    next(error);
  }
};

export const addToStart = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    playlistService.addSongToStart(req.body);
    res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};

export const addToEnd = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    playlistService.addSongToEnd(req.body);
    res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};

export const addAtPosition = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { position } = req.body;
    playlistService.addSongAtPosition(req.body, position);
    res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};

export const removeSong = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { id } = req.params as { id: string };

    const removed = playlistService.removeSong(id);

    if (!removed) {
      res.status(404).json({ success: false });
      return;
    }

    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

export const nextSong = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.status(200).json({
      success: true,
      data: playlistService.next()
    });
  } catch (error) {
    next(error);
  }
};

export const prevSong = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.status(200).json({
      success: true,
      data: playlistService.prev()
    });
  } catch (error) {
    next(error);
  }
};

export const getCurrentSong = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.status(200).json({
      success: true,
      data: playlistService.getCurrentSong()
    });
  } catch (error) {
    next(error);
  }
};