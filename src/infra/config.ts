import { AppLogger } from './logger';
import convict from 'convict';

const schema = {
  nodeEnv: {
    doc:
      'Running in an environment, or on a developer machine? Mainly used to decide log structure etc',
    format: ['production', 'development'],
    env: 'NODE_ENV',
    default: 'production',
  },
  productName: {
    doc: 'Product name to use in metrics and logging',
    format: String,
    env: 'PRODUCT_NAME',
    default: 'app',
  },
  port: {
    doc: 'Port for starting the app on.',
    format: 'port',
    env: 'PORT',
    default: 8000,
  },
  logLevel: {
    doc: 'Log level to start logging at.',
    format: ['debug', 'info', 'warn', 'error'],
    env: 'LOG_LEVEL',
    default: 'debug',
  },
  youtubeMp3Downloader: {
    ffmpegPath: {
      doc: 'Path to ffmpeg binary',
      format: String,
      env: 'YTDL_FFMPEG_PATH',
      default: '/usr/bin/ffmpeg',
    },
    outputPath: {
      doc: 'Where to save downloaded files',
      format: String,
      env: 'YTDL_OUTPUT_PATH',
      default: '/home/ubuntu/tmpmusic',
    },
    progressTimeout: {
      doc: 'How long should be the interval of the progress reports',
      format: Number,
      env: 'YTDL_PROGRESS_TIMEOUT',
      default: 2000,
    },
    queueParallelism: {
      doc: 'How many parallel downloads/encodes should be started?',
      format: Number,
      env: 'YTDL_QUEUE_PARALLELISM',
      default: 2,
    },
  },
  thumbnailDownload: {
    outputPath: {
      doc: 'Where to save thumbnails',
      format: String,
      env: 'THUMBNAIL_OUTPUT_PATH',
      default: '/home/ubuntu/tmpthumbnails',
    },
  },
};

const basicConfig = convict(schema);
basicConfig.validate({ allowed: 'strict' });
const config = {
  ...basicConfig,
  logCurrentConfig,
};

export function logCurrentConfig(log: AppLogger) {
  //JSON.stringify from JSON.parse to remove all whitespaces in config
  const configToLog = JSON.stringify(JSON.parse(config.toString()));
  log.info(`Current config: ${configToLog}`);
}

export type Config = typeof config;
export default config;
