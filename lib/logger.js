var winston = require('winston')
var Logstash = require('winston-logstash').Logstash

var transports = [
  new winston.transports.Console({
    level: 'debug',
    json: false,
    silent: Boolean(process.env.SILENT),
    colorize: true
  })
]

if (!process.env.SILENT) {
  transports.push(new Logstash({
    level: 'debug',
    port: 28777,
    node_name: 'user-api',
    host: process.env.LOGSTASH_HOST
  }))
}

var logger = new winston.Logger({
  transports: transports,
  levels: winston.config.syslog.levels,
  exitOnError: false
})

logger.emitErrs = false

exports.logger = logger
