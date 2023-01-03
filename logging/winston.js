const winston = require("winston");
const dotenv = require("dotenv");
dotenv.config();

const consoleTransport = new winston.transports.Console();
winston.add(consoleTransport);

// by default logging is set upto maximum of number 2 severity but you can configure
/*

consoleTransport.level = process.env.LOG_LEVEL || "silly";  

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

winston.error("error");
winston.warn("warn");
winston.info("info");
winston.verbose("verbose");
winston.debug("debug");
winston.silly("silly");

*/

const { Logtail } = require("@logtail/node");
const { LogtailTransport } = require("@logtail/winston");

const logtail = new Logtail(process.env.SOURCE_TOKEN); // logtail sourcetoken

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" }),
    new LogtailTransport(logtail),
  ],
});

logger.info("Info message");

/*
HTTP request data such as the route path or verb.
IP addresses.
Session identifiers.
Order or transaction IDs.
Exception details.\

logger.info("Starting all recurring tasks", {
  tag: "starting_recurring_tasks",
  id: "TaskManager-1234729",
  module: "RecurringTaskManager",
});

*/
