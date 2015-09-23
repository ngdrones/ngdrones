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


    // TODO research, find library and integrate leap motion controls into ARDrone and Ollie refer to google earth and leap motion for ARDrone controls, and the horizontal controls of google earth for ollie
    leapSwipeLeft(gesture){
      console.log('LEAP: swipe left', gesture);
    }

    leapSwipeRight(gesture){
      console.log('LEAP: swipe right', gesture);
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
