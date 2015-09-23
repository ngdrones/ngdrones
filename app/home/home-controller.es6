(function () {
  'use strict';

  class HomeCtrl {
    constructor( Ardrone, Ollie, leap ) {
      // default init drone
      this.bot = Ardrone;
      this.a = 1;
      this.leap = leap;

      this.my_controller = new Leap.Controller({enableGestures: true});


      console.log(leap);

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
    leapSwipeLeft($gesture){
      console.log('LEAP: swipe left', $gesture);
    }

    leapSwipeRight($gesture){
      console.log('LEAP: swipe right', $gesture);
    }



    sqrt($gesture){
      console.log('sqrt');
      this.a = Math.sqrt(this.a);
    }
    pow2($gesture){
      console.log('pow2');
      this.a = Math.pow(this.a, $gesture.handIds.length+1);
    }
    addByCircleSize($gesture){
      console.log('circleSize');
      this.a = this.a + $gesture.radius;
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
