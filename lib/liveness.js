'use strict';
var express = require('express');
var logger = require('./logging.js');
var util = require('util')

module.exports.init = function() {
  const PORT = 8080;
  const HOST = '0.0.0.0';
  const app = express();

  app.get('/liveness',(req,res)=> {
      var delta = process.hrtime(global.last_heartbeat_time);
      var delta_seconds = delta[0]
      if (delta_seconds < global.liveness_threshold ) {
          res.send ("Health check passed");
      } else {
          var message = util.format("Health check did not pass, %d seconds since last heartbeat", delta_seconds)
          res.status(500).send(message);
      }
  });

  app.listen(PORT, HOST);
  logger.info("Running health check service on http://%s:%d", HOST, PORT);
}
