import { Song } from '../models/song.model';
import { DoublyLinkedList } from '../data-structures/doublyLinkedList';

export class PlaylistService {
  private playlist: DoublyLinkedList = new DoublyLinkedList();

  getPlaylist(): Song[] {
    return this.playlist.toArray();
  }

  addSongToStart(song: Song): void {
    this.playlist.prepend(song);
  }

  addSongToEnd(song: Song): void {
    this.playlist.append(song);
  }

  addSongAtPosition(song: Song, position: number): void {
    this.playlist.addAtPosition(song, position);
  }

  removeSong(id: string): boolean {
    return this.playlist.removeById(id);
  }

  next(): Song | null {
    return this.playlist.next();
  }

  prev(): Song | null {
    return this.playlist.prev();
  }

  getCurrentSong(): Song | null {
    return this.playlist.getCurrent();
  }
}