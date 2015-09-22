(function () {
  'use strict';

  class HomeCtrl {
    constructor( Ardrone, Ollie ) {

      // default init drone
      this.bot = Ardrone;

      // List of Drones available to control
      this.availableBots = [
        {
          "label":   "AR Drone",
          "bot": Ardrone
        },
        {
          "label":   "Ollie",
          "bot": Ollie
        }
      ]



    }



  }

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller( 'HomeCtrl', HomeCtrl );
}());
