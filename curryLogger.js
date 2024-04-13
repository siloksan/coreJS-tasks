function curryLogger(logger) {
  return function(...args) {
    return function(message) {
      logger(message, ...args);
    };
  };
}

// Example usage
function customLogger(message, level) {
  console.log(`[${level}] ${message}`);
}

const curriedCustomLogger = curryLogger(customLogger);

const infoLogger = curriedCustomLogger('INFO');
infoLogger('This is an information message');
infoLogger('Another information message');
