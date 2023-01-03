const { logger } = require("./logger");
//  newline delimited JSON format

// logger.level = process.env.PINO_LOG_LEVEL || "info";

// logger.fatal("fatal");
// logger.error("error");
// logger.warn("warn");
// logger.info("info");
// logger.debug("debug");
// logger.trace("trace");

// ([mergingObject], [message], [...interpolationValues])

logger.info("Upload successful!");

logger.info(
  { name: "bucky.mp5", mime_type: "video/mp4" },
  "Upload successful!"
);

logger.info(
  "Upload of file '%s' with mime type '%s' is successful!",
  "bucky.mp4",
  "video/mp4"
);

logger.info(
  { name: "bucky.mp4", mime_type: "video/mp4" },
  "%s: file upload succeeded.",
  "bucky.mp4"
);

logger.emerg("Emergency");
logger.alert("Alert");
logger.crit("Critical");

logger.error(
  {
    transaction_id: "efui2e9",
    user_id: "eu9j2qksa",
  },
  "Transaction failed: cc number is invalid"
);

const childLogger = logger.child({
  requestId: "83ed4675f1c53513c61a3b3b4e25b4c0",
});

childLogger.info(
  {
    file: "boat.png",
    type: "image/png",
  },
  "file upload successful"
);

logger.error(new Error("ValidationError: email address in invalid"));
