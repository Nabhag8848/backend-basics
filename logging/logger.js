const pinoLogger = require("pino");

const levels = {
  emerg: 80,
  alert: 70,
  crit: 60,
  error: 50,
  warn: 40,
  notice: 30,
  info: 20,
  debug: 10,
};

// const streams = [
//   { stream: process.stdout },
//   { stream: pinoLogger.destination(`${__dirname}/combined.log`) },
// ];

const streams = Object.keys(levels).map((level) => {
  return {
    level: level,
    stream: pinoLogger.destination({
      dest: `${__dirname}/app-${level}.log`,
      sync: false,
    }),
  };
});

module.exports = {
  logger: pinoLogger(
    {
      level: process.env.PINO_LOG_LEVEL || "info",
      customLevels: levels,
      useOnlyCustomLevels: true,
      formatters: {
        level: (label) => {
          return { level: label };
        },
      },
    },
    pinoLogger.multistream(streams, {
      levels,
      dedupe: true, //  ensures that each log entry is not duplicated to all the streams
    })
  ),
};
