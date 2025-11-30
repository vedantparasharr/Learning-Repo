const dayjs = require("dayjs");

const date = dayjs()

const {v4: uuid} = require('uuid')

console.log(date.format('MMM, DD'))

console.log(uuid())