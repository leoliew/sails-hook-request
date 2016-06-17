
module.exports = function(sails) {

  return {

    /**
     * Default configuration
     *
     * We do this in a function since the configuration key for
     * the hook is itself configurable, so we can't just return
     * an object.
     */
    defaults: {

    },

    routes: {

      before: {

        'all /*': function (req, res, next) {


          req.on("end", function () {
            len = parseInt(res.getHeader('Content-Length'), 10);
            if (isNaN(len)) {
              len = -1;
            } else {
              len = require('bytes')(len);
            }
            line = req.headers['user-agent'] + '\" \"referer:' + (req.headers['referer'] || req.headers['referrer'] || '') + '\" \"' + (req.headers['x-forwarded-for'] || req.ip || (req.socket && req.socket.socket && req.socket.socket.remoteAddress) || req.socket.remoteAddress) + ' ' + req.method + ' ' + (req.originalUrl || req.url) + ' HTTP/' + req.httpVersionMajor + '.' + req.httpVersionMinor + ' ' + res.statusCode + '\" response size : ' + len + ' need time ' + (new Date() - req._startTime) + 'ms.';
            if (res.statusCode >= 500) {
              sails.log.error(line);
            } else if (res.statusCode >= 400) {
              sails.log.error(line);
            } else if (res.statusCode >= 300) {
              sails.log.info(line);
            } else if (req.url.startWith('/api/vi/health')) {
              sails.log.verbose(line);
            } else {
              sails.log.info(line);
            }
          });
          next();

        }
      }
    },

    /**
     * Initialize the hook
     * @param  {Function} cb Callback for when we're done initializing
     */
    initialize: function(cb) {
      // Finally
      cb();
    }

  };
};
