import fs from 'fs';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

// logs dir
const logDir = __dirname + '/../logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const { combine, timestamp, printf, splat, colorize } = winston.format;

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`),
  ),
  transports: [
    new winston.transports.Console({
      level: 'silly',
      handleExceptions: true,
      format: winston.format.combine(
        timestamp({
          format: 'DD/MM/YYYY @ hh:mm:ss a',
        }),
        splat(),
        colorize(),
        printf(({ level, message, timestamp }) => `${level}: ${message} [${timestamp}]`)
      ),
    }),
    // info log setting
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/info', // log file /logs/info/*.log in save
      filename: `%DATE%.log`,
      maxFiles: 30, // 30 Days saved
      json: false,
      zippedArchive: true,
    }),
    // error log setting
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error', // log file /logs/error/*.log in save
      filename: `%DATE%.error.log`,
      maxFiles: 30, // 30 Days saved
      handleExceptions: true,
      json: false,
      zippedArchive: true,
    }),
  ],
});

const stream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  },
};

export { logger, stream };
