var StatsD = require('node-dogstatsd').StatsD;

module.exports.client = function() {
  return new StatsD(process.env.GIT2CONSUL_STATSD_HOST);
}
