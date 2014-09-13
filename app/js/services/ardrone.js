
/*================================================================
=>                   Service = ardrone
==================================================================*/
/*global app*/

app.service('ardrone', ['$rootScope', '$http', '$resource', function ($rootScope, $http, $resource) {

	'use strict';
	var _this,
		ardrone;








	ardrone = {
		stop: function () {
			$http.get('/api/robots/ngdrone/devices/drone/commands/stop');
		},
		takeOff: function () {
			$http.get('/api/robots/ngdrone/devices/drone/commands/takeoff');
		},
		land: function () {
			$http.get('/api/robots/ngdrone/devices/drone/commands/land');
		},
		up: function (speed) {
			$http.post('/api/robots/ngdrone/devices/drone/commands/up', {speed: speed} );
		},
		down: function (speed) {
			$http.post('/api/robots/ngdrone/devices/drone/commands/down', {speed: speed} );
		},
		left: function (speed) {
			$http.post('/api/robots/ngdrone/devices/drone/commands/left', {speed: speed} );
		},
		right: function (speed) {
			$http.post('/api/robots/ngdrone/devices/drone/commands/right', {speed: speed} );
		},
		front: function (speed) {
			$http.post('/api/robots/ngdrone/devices/drone/commands/front', {speed: speed} );
		},
		back: function (speed) {
			$http.post('/api/robots/ngdrone/devices/drone/commands/back', {speed: speed} );
		},
		clockwise: function (speed) {
			$http.post('/api/robots/ngdrone/devices/drone/commands/clockwise', {speed: speed} );
		},
		counter_clockwise: function (speed) {
			$http.post('/api/robots/ngdrone/devices/drone/commands/counter_clockwise', {speed: speed} );
		},
	};

	_this = ardrone;
	return _this;
}]);


/*-----  End of Service = ardrone  ------*/