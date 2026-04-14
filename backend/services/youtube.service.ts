import ytsr from 'ytsr';
import { Song } from '../models/song.model';

export class YoutubeService {
  async search(query: string): Promise<Song[]> {
    if (!query) return [];

    const searchResults = await ytsr(query, { limit: 10 });

    const songs: Song[] = searchResults.items
      .filter((item: any) => item.type === 'video')
      .map((video: any) => ({
        id: video.id,
        title: video.title,
        artist: video.author?.name || 'Unknown',
        duration: video.duration
          ? this.parseDuration(video.duration)
          : 0,
        url: video.url,
        thumbnail: video.bestThumbnail?.url || ''
      }));

    return songs;
  }

  async getById(id: string): Promise<Song | null> {
    // Simple fallback (puedes mejorarlo luego)
    return {
      id,
      title: 'Unknown Title',
      artist: 'Unknown Artist',
      duration: 0,
      url: `https://www.youtube.com/watch?v=${id}`,
      thumbnail: ''
    };
  }

  private parseDuration(duration: string): number {
    const parts = duration.split(':').map(Number);

    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }

    if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    }

    return 0;
  }
}