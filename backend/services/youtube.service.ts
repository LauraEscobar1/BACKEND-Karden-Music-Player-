import ytsr from 'ytsr';
import { Song } from '../models/song.model';

console.log("🔥 YOUTUBE SERVICE CARGADO");

export class YoutubeService {
  async search(query: string): Promise<Song[]> {
    if (!query || query.trim() === '') return [];

    const searchResults = await ytsr(query, { limit: 10 });

  
    console.log("🔥 SEARCH QUERY:", query);
    console.log("🔥 TOTAL ITEMS:", searchResults.items.length);

    const songs: Song[] = searchResults.items
      .filter((item: any) => item?.type === 'video')
      .map((video: any) => {

        const url = video.url || '';

      
        let videoId = video.id;

        if (!videoId && url.includes('v=')) {
          videoId = url.split('v=')[1]?.split('&')[0];
        }

        return {
          id: videoId || '',
          title: video.title || 'Unknown Title',
          artist: video.author?.name || 'Unknown Artist',
          duration: video.duration
            ? this.parseDuration(video.duration)
            : 0,
          url,
          thumbnail: video.bestThumbnail?.url || ''
        };
      })
      
      .filter((song: Song) => song.id && song.id.length > 5);

    console.log("🔥 FINAL SONGS:", songs.length);

    return songs;
  }

  async getById(id: string): Promise<Song | null> {
    if (!id || id === 'search') return null;

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