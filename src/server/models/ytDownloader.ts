export interface YtDownloaderResponse {
  videoId: string;
  stats: {
    transferredBytes: string;
    runtime: string;
    averageSpeed: string;
  };
  file: string;
  youtubeUrl: string;
  videoTitle: string;
  artist: string;
  title: string;
  thumbnail: string;
}
