var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log(now.unix());


var timestamp = 1467563864;

var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format());
