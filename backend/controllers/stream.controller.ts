import { Request, Response } from 'express';

export const streamMusic = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({
        success: false,
        message: 'ID required'
      });
      return;
    }

    const streamUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;

    res.status(200).json({
      success: true,
      streamUrl
    });

  } catch (error) {
    console.error('STREAM ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Error generating stream'
    });
  }
};