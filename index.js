const moment = require('moment');

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, prettyPrint } = format;

const logger = createLogger({
  transports: [
    new transports.File({
      filename: 'output.log',
      handleExceptions: true,
      prettyPrint: true,
      timestamp: true,
      json: true,
   })
  ]
});

const log = (type, ...args) => {
  console.log(`${moment().format('L LTS')}:`, ...args);

  logger.log('info', `${moment().format('L LTS')}`);
  logger.log(type, ...args);
};

module.exports = {
  log: (...args) => log('info', ...args),
  info: (...args) => log('info', ...args),
  error: (...args) => log('error', ...args),
  warning: (...args) => log('warning', ...args),
  debug: (...args) => log('debug', ...args),
};
