import { Song } from '../models/song.model';
import { DoublyLinkedList } from '../data-structures/doublyLinkedList';

export class PlaylistService {
  private playlist: DoublyLinkedList = new DoublyLinkedList();

  getAll(): Song[] {
    return this.playlist.toArray();
  }

  add(song: Song): void {
    this.playlist.append(song);
  }

  remove(id: string): boolean {
    return this.playlist.removeById(id);
  }
}