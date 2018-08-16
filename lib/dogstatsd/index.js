var StatsD = require('node-dogstatsd').StatsD

module.exports.client = function() {
  return new StatsD()
}
