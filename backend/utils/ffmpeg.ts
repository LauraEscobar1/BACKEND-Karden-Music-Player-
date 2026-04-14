import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

export const convertToMp3 = async (
  inputPath: string,
  outputPath: string
): Promise<void> => {
  await execFileAsync('ffmpeg', [
    '-i', inputPath,
    '-vn',
    '-ar', '44100',
    '-ac', '2',
    '-b:a', '192k',
    outputPath,
  ]);
};