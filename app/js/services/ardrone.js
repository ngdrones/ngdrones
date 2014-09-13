
/*================================================================
=>                   Service = ardrone
==================================================================*/
/*global app*/

app.service('ardrone', ['$rootScope', '$http', '$resource', function ($rootScope, $http, $resource) {

	'use strict';
	var _this,
		ardrone;






	var speed = 0.1;


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
		up: function () {
			$http.post('/api/robots/ngdrone/devices/drone/commands/up', {data: {speed: speed}} );
		},
		down: function () {
			$http.post('/api/robots/ngdrone/devices/drone/commands/down', {speed: speed} );
		},
		left: function () {
			$http.post('/api/robots/ngdrone/devices/drone/commands/left', {speed: speed} );
		},
		right: function () {
			$http.post('/api/robots/ngdrone/devices/drone/commands/right', {speed: speed} );
		}
	};

	_this = ardrone;
	return _this;
}]);


/*-----  End of Service = ardrone  ------*/