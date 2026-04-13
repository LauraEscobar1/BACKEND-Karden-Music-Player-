import { Song } from '../models/song.model';

export class YoutubeService {
  async search(_query: string): Promise<Song[]> {
    return [];
  }

  async getById(_videoId: string): Promise<Song | null> {
    return null;
  }
}