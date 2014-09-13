
/*================================================================
=>                  Controller = Homectrl
==================================================================*/
/*global app*/

app.controller('HomeCtrl', ['$scope', 'ardrone', function ($scope, drone) {

	'use strict';
	$scope.sentence = "HELLO WORLD";
	$scope.count = 7;
	$scope.keyTest = function(event){
		console.log(event.keyCode);
	}

	console.log('Controller ===  HomectrlCtrl');
}]);


/*-----  End of Controller = Homectrl  ------*/



