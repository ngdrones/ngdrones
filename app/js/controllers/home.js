
/*================================================================
=>                  Controller = Homectrl
==================================================================*/
/*global app*/

app.controller('HomeCtrl', ['$scope', 'ardrone', function ($scope, ardrone) {

	'use strict';

	$scope.keyTest = function(event){
		if (event.keyCode == 69) {
			// e = takeoff
			ardrone.takeOff();
		}
		else if(event.keyCode == 82) {
			// r = land
			ardrone.land();
		}
		else if (event.keyCode == 32) {
			// space equals emergency
			ardrone.stop();
		}
		// w = 87
	}

}]);


/*-----  End of Controller = Homectrl  ------*/



