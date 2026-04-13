import { Song } from '../models/song.model';
import { SongNode } from './songNode';

export class DoublyLinkedList {
  private head: SongNode | null = null;
  private tail: SongNode | null = null;
  private size: number = 0;

  append(song: Song): void {
    const node = new SongNode(song);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(song: Song): void {
    const node = new SongNode(song);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  removeById(id: string): boolean {
    let current = this.head;
    while (current) {
      if (current.data.id === id) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next;
        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toArray(): Song[] {
    const result: Song[] = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  getSize(): number {
    return this.size;
  }

  getHead(): SongNode | null {
    return this.head;
  }

  getTail(): SongNode | null {
    return this.tail;
  }
}
