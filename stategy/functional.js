const logger = (strategy, level, message) => strategy(level, message);

const logToConsoleStrategy = (level, message) => console[level](message);

const logToDOMStrategy = (level, message, node) => {
  node.innerHTML = `<div class='${level}'>${message}</div>`
};

logger(
  logToConsoleStrategy, //or you can change strategy to logToDOMStrategy
  'log',
  'log first message to console'
);

// We have a function wich get for this example tree params is function and data;
// Function is the main args wich change the logic of program execution