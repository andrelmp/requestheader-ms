'use strict';

var Handler = require('./app/controllers/whoamiHandler.js');

module.exports = function (app) {
   var handler = new Handler();
   app.route('/api/whoami').get(handler.getWhoami);
};
