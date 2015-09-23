(function () {
  'use strict';

  class Ardrone {
    constructor( $http ) {
      this.name = "AR Drone";
      this.speed = {
        horizontal: 10,
        vertical: 10,
        rotation: 10
      };

      // flight controls - http://cylonjs.com/documentation/drivers/ardrone-flight/
      // TODO: (add flight controls) - animate, animateLeds**, frontFlip, backFlip, leftFlip, rightFlip, wave**, getPngStream**, hover, ftrim

      // navigation controls - http://cylonjs.com/documentation/drivers/ardrone-navigation/
      // TODO: (add nav controls) - lowBattery**, altitudeChange**, batteryChange**, landed, landing**, takeoff, hovering, flying


      this.botControls = [
        {
          key: 32,
          input: "Space Bar",
          text: "Emergency Stop.",
          action: () => {
            $http.get('/api/robots/ngdrone/devices/drone/commands/stop');
          }
        }, {
          key: 38,
          input: "Up Arrow",
          text: "Up",
          action: () => {
            $http.post('/api/robots/ngdrone/devices/drone/commands/up', {speed: this.speed.vertical} );
          }
        }, {
          key: 40,
          input: "Down Arrow",
          text: "Down",
          action: () => {
            $http.post('/api/robots/ngdrone/devices/drone/commands/down', {speed: this.speed.vertical} );
          }
        }, {
          key: 65,
          input: "a",
          text: "Left",
          action: () => {
            $http.post('/api/robots/ngdrone/devices/drone/commands/left', {speed: this.speed.horizontal} );
          }
        }, {
          key: 68,
          input: "d",
          text: "Right",
          action: () => {
            $http.post('/api/robots/ngdrone/devices/drone/commands/right', {speed: this.speed.horizontal} );
          }
        }, {
          key: 69,
          input: "e",
          text: "Rotate Clockwise",
          action: () => {
            $http.post('/api/robots/ngdrone/devices/drone/commands/clockwise', {speed: this.speed.rotation} );
          }
        }, {
          key: 82,
          input: "r",
          text: "Land",
          action: () => {
            $http.get('/api/robots/ngdrone/devices/drone/commands/land');
          }
        }, {
          key: 83,
          input: "s",
          text: "Back",
          action: () => {
            $http.post('/api/robots/ngdrone/devices/drone/commands/back', {speed: this.speed.horizontal} );
          }
        }, {
          key: 84,
          input: "t",
          text: "Take Off",
          action: () => {
            $http.get('/api/robots/ngdrone/devices/drone/commands/takeoff');
          }
        }, {
          key: 87,
          input: "w",
          text: "Forward",
          action: () => {
            $http.post('/api/robots/ngdrone/devices/drone/commands/front', {speed: this.speed.horizontal} );
          }
        }, {
          key: 81,
          input: "q",
          text: "Rotate Counter-Clockwise",
          action: () => {
            $http.post('/api/robots/ngdrone/devices/drone/commands/counter_clockwise', {speed: this.speed.rotation} );
          }
        }
      ];
    }

    trigger(event){
      for(let ctrl of this.botControls){
        if(ctrl.key == event.keyCode){
          console.log('ardrone: ', ctrl.text);
          ctrl.action();
        }
      }
    }



  }

  /**
   * @ngdoc service
   * @name home.service:Ardrone
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('Ardrone', Ardrone);
}());
