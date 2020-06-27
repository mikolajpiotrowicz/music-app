import YoutubeMp3Downloader, { IYoutubeMp3DownloaderOptions } from 'youtube-mp3-downloader';
import { WinstonCompatibleLoggerInterface } from '../../infra/logger';
import { YtDownloaderResponse } from '../models/ytDownloader';

export class YoutubeDownloaderService {
  private youtubeDownloader: YoutubeMp3Downloader;
  private logger: WinstonCompatibleLoggerInterface;

  constructor(options: IYoutubeMp3DownloaderOptions, logger: WinstonCompatibleLoggerInterface) {
    this.youtubeDownloader = new YoutubeMp3Downloader(options);
    this.logger = logger;
    this.initYoutubeDownloader();
  }

  private initYoutubeDownloader() {
    this.youtubeDownloader.on('progress', progress => {
      this.logger.info(JSON.stringify(progress));
    });
  }

  async mp3Download(youtubeId: string, filename: string): Promise<YtDownloaderResponse> {
    return new Promise((resolve, reject) => {
      this.youtubeDownloader.download(youtubeId, filename);
      this.youtubeDownloader.on('finished', (err, data) => {
        if (err) {
          this.logger.error(err);
          reject(err);
        }
        this.logger.info(JSON.stringify(data));
        resolve(data);
      });

      this.youtubeDownloader.on('error', error => {
        this.logger.error(error);
        reject(error);
      });
    });
  }
}
