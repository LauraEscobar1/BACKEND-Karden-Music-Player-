import ytdl from 'ytdl-core';

export class StreamService {
  getAudioStream(id: string) {
    const url = `https://www.youtube.com/watch?v=${id}`;

    return ytdl(url, {
      filter: 'audioonly',
      quality: 'highestaudio',
      highWaterMark: 1 << 25
    });
  }
}