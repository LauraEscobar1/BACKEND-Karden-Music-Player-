import { Song } from '../models/song.model';

export class SongNode {
  public data: Song;
  public prev: SongNode | null = null;
  public next: SongNode | null = null;

  constructor(data: Song) {
    this.data = data;
  }
}