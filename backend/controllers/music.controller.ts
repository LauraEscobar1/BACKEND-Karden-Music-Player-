import { Request, Response, NextFunction } from 'express';
import { YoutubeService } from '../services/youtube.service';

const youtubeService = new YoutubeService();

export const searchMusic = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const q = req.query.q;

   
    if (!q || typeof q !== 'string') {
      res.status(400).json({
        success: false,
        message: 'Query parameter "q" is required'
      });
      return;
    }

    const results = await youtubeService.search(q);

    res.status(200).json({
      success: true,
      data: results
    });

  } catch (error) {
    console.error(" SEARCH ERROR:", error);

    res.status(500).json({
      success: false,
      message: 'Error searching music'
    });
  }
};

export const getMusicById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id;

   
    if (!id) {
      res.status(400).json({
        success: false,
        message: 'ID is required'
      });
      return;
    }

    const song = await youtubeService.getById(id);

    if (!song) {
      res.status(404).json({
        success: false,
        message: 'Song not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: song
    });

  } catch (error) {
    console.error(" GET BY ID ERROR:", error);

    res.status(500).json({
      success: false,
      message: 'Error getting song by id'
    });
  }
};