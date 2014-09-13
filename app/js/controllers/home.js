
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
		else if (event.keyCode == 87) {
			// w = up
			ardrone.up(.25);
		}
		else if (event.keyCode == 65) {
			// space equals emergency
			ardrone.left(.25);
		}
		else if (event.keyCode == 83) {
			// space equals emergency
			ardrone.down(.25);
		}
		else if (event.keyCode == 68) {
			// space equals emergency
			ardrone.right(.25);
		}

		// w = 87
	}

}]);


/*-----  End of Controller = Homectrl  ------*/



