var winston = require('winston')

var transports = [
  new winston.transports.Console({
    level: 'debug',
    json: false,
    silent: Boolean(process.env.SILENT),
    colorize: true
  })
]

var logger = new winston.Logger({
  transports: transports,
  levels: winston.config.syslog.levels,
  exitOnError: false
})

logger.emitErrs = false

exports.logger = logger
