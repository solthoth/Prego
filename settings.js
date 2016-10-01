"use strict";

var app = require('./app');
var compression = require('compression');

// Set global settings
app.set('case sensitive routing', false);

// Set environment specific settings
if (app.get('env') === 'development') {
    console.log('Running[' + app.get('env') + '] on port ' + process.env.PORT);
    app.locals.pretty = true;
} else { // assume production
    app.locals.pretty = false;
    app.use(compression);
}