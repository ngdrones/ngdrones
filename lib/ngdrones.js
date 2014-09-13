/*
 *
 * http://ngdron.es
 *
 * Copyright (c) 2014 Benjamin Kitt
 * Licensed under the MIT license.
 */

'use strict';
var express = require('express');

exports.ngdrones = function(o) {
    o = o || {
        host: 'localhost',
        port: '3000'
    };
    var Cylon = require('cylon');
    Cylon.robot({
        connection: {
            name: 'ardrone',
            adaptor: 'ardrone',
            port: '192.168.1.1'
        },
        device: {
            name: 'drone',
            driver: 'ardrone'
        },
        name: 'ngdrone'
    }).start();
    var app = express();
    app.use(express.static(__dirname + '/../build/'));
    app.use('/api', require('./cylon-api'));
    app.listen(o.port);
};