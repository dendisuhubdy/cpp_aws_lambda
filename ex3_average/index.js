exports.averageHandler = function(event, context, callback) {
    const addon = require('avg');
    var result = addon.getAverage(event.op1, event.op2, event.op3);
    callback(null, result);
    context.succeed(result);
 }
