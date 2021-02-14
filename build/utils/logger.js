"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stream = exports.logger = void 0;
const fs_1 = __importDefault(require("fs"));
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
// logs dir
const logDir = __dirname + '/../logs';
if (!fs_1.default.existsSync(logDir)) {
    fs_1.default.mkdirSync(logDir);
}
const { combine, timestamp, printf, splat, colorize } = winston_1.default.format;
/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston_1.default.createLogger({
    format: combine(timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)),
    transports: [
        new winston_1.default.transports.Console({
            level: 'silly',
            handleExceptions: true,
            format: winston_1.default.format.combine(timestamp({
                format: 'DD/MM/YYYY @ hh:mm:ss a',
            }), splat(), colorize(), printf(({ level, message, timestamp }) => `${level}: ${message} [${timestamp}]`)),
        }),
        // info log setting
        new winston_daily_rotate_file_1.default({
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir + '/info',
            filename: `%DATE%.log`,
            maxFiles: 30,
            json: false,
            zippedArchive: true,
        }),
        // error log setting
        new winston_daily_rotate_file_1.default({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir + '/error',
            filename: `%DATE%.error.log`,
            maxFiles: 30,
            handleExceptions: true,
            json: false,
            zippedArchive: true,
        }),
    ],
});
exports.logger = logger;
const stream = {
    write: (message) => {
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    },
};
exports.stream = stream;
//# sourceMappingURL=logger.js.map