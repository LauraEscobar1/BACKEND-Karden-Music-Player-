import { Song } from '../models/song.model';
import { SongNode } from './songNode';

export class DoublyLinkedList {
  private head: SongNode | null = null;
  private tail: SongNode | null = null;
  private current: SongNode | null = null;
  private size: number = 0;

  append(song: Song): void {
    const node = new SongNode(song);

    if (!this.tail) {
      this.head = this.tail = this.current = node;
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
      this.head = this.tail = this.current = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.size++;
  }

  addAtPosition(song: Song, position: number): void {
    if (position <= 0) {
      this.prepend(song);
      return;
    }

    if (position >= this.size) {
      this.append(song);
      return;
    }

    const node = new SongNode(song);
    let current = this.head;

    for (let i = 0; i < position - 1 && current; i++) {
      current = current.next;
    }

    if (current && current.next) {
      node.next = current.next;
      node.prev = current;
      current.next.prev = node;
      current.next = node;
      this.size++;
    }
  }

  removeById(id: string): boolean {
    let current = this.head;

    while (current) {
      if (current.data.id === id) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next;

        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;

        // fix current pointer
        if (this.current === current) {
          this.current = current.next || current.prev;
        }

        this.size--;
        return true;
      }

      current = current.next;
    }

    return false;
  }

  next(): Song | null {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      return this.current.data;
    }
    return null;
  }

  prev(): Song | null {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
      return this.current.data;
    }
    return null;
  }

  getCurrent(): Song | null {
    return this.current ? this.current.data : null;
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
}