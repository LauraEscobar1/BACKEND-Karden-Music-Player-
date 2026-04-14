export class StreamService {
  getStreamUrl(id: string): string {
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }
}