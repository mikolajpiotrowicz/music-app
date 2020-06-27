import winston from 'winston';
import moment from 'moment';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { date: moment().format('DD-MM-YYYY hh:mm:ss'), timestamp: new Date().getTime() },
  transports: [new winston.transports.File({ filename: 'info.log' })],
});
