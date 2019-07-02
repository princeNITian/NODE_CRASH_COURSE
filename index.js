// const person = require("./person");

// console.log(person.name);

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener ',data));

logger.log('Hello World');