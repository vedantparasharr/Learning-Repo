const logEvents = require('./logEvents');

const eventEmitter = require('events');

class MyEmitter extends eventEmitter {

};

const myEmitter = new MyEmitter;

myEmitter.on('log', (message) => {
    logEvents(message);
})

//Timer
setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted!')
}, 2000)



// const dayjs = require("dayjs");

// const date = dayjs()

// const {v4: uuid} = require('uuid')

// console.log(date.format('MMM, DD'))

// console.log(uuid())