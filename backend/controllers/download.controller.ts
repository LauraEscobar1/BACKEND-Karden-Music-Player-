import { Request, Response, NextFunction } from 'express';
import { DownloadService } from '../services/download.service';

const downloadService = new DownloadService();

export const downloadMusic = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { videoId, outputPath } = req.body;
    const filePath = await downloadService.download(videoId, outputPath);
    res.status(200).json({ success: true, data: { filePath } });
  } catch (error) {
    next(error);
  }
};