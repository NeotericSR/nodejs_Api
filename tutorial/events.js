let events = require('events');

let eventEmitter = new events.EventEmitter();

//create an event handler 
let eventHandler = () => console.log('I hear a scream');
let eventHandler2 = () => console.log('I also hear a scream');

//Assign the event handler to an event
eventEmitter.on('scream', eventHandler);
eventEmitter.on('scream', eventHandler2);

//Fire the scream event
eventEmitter.emit('scream');