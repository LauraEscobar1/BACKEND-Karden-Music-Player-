import { Request, Response } from 'express';
import { StreamService } from '../services/stream.service';

const streamService = new StreamService();

export const streamMusic = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ success: false, message: 'ID required' });
      return;
    }

    const stream = streamService.getAudioStream(id);

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Accept-Ranges', 'bytes');

    stream.pipe(res);

  } catch (error) {
    console.error('STREAM ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Error streaming audio'
    });
  }
};