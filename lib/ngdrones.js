/*
 *
 * http://ngdron.es
 *
 * Copyright (c) 2014 Benjamin Kitt
 * Licensed under the MIT license.
 */

import express from 'express';
import cylon from 'cylon';

let ngdrones = (o) => {
    o = o || {
        host: 'localhost',
        port: '8000'
    };
    cylon.robot({
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

export default ngdrones;