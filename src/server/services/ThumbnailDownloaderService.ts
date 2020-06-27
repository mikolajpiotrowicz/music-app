import util from 'util';
import * as fs from 'fs';
import fetch from 'node-fetch';
const streamPipeline = util.promisify(require('stream').pipeline);

export async function saveThumbnail(url: string, fileName: string) {
  const response = await fetch(url);
  console.log(`Fetching thumbnail: ${url}`)
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
  return await streamPipeline(response.body, fs.createWriteStream(fileName));
}
