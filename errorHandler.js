function sendError(res, statusCode, errorCode, message) {
  return res.status(statusCode).json({
    error_code: errorCode,
    message: message,
    timestamp: new Date().toISOString()
  });
}

function notFoundHandler(req, res) {
  return sendError(
    res,
    404,
    "ROUTE_NOT_FOUND",
    `Route ${req.method} ${req.originalUrl} was not found.`
  );
}

function errorHandler(err, req, res, next) {
  console.error(err);

  return sendError(
    res,
    500,
    "INTERNAL_SERVER_ERROR",
    "An unexpected server error occurred."
  );
}

module.exports = {
  sendError,
  notFoundHandler,
  errorHandler
};