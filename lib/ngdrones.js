/*
 *
 * http://ngdron.es
 *
 * Copyright (c) 2014 Benjamin Kitt
 * Licensed under the MIT license.
 */

'use strict';

exports.ngdrones = function() {
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
    Cylon.api();
};