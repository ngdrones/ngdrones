(function () {
  'use strict';

  class Ollie {
    constructor( $http ) {
      this.name = 'Ollie';
      this.speed = {
        horizontal: 10
      };
      this.botControls = [
        {
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
          key: 83,
          input: "s",
          text: "Back",
          action: () => {
            $http.post('/api/robots/ngdrone/devices/drone/commands/back', {speed: this.speed.horizontal} );
          }
        }, {
          key: 87,
          input: "w",
          text: "Forward",
          action: () => {
            $http.post('/api/robots/ngdrone/devices/drone/commands/front', {speed: this.speed.horizontal} );
          }
        }
      ];
    }


    trigger(event){
      for(let ctrl of this.botControls){
        if(ctrl.key == event.keyCode){
          console.log('ollie: ', ctrl.text);
          ctrl.action();
        }
      }
    }

  }

  /**
   * @ngdoc service
   * @name home.service:Ollie
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('Ollie', Ollie);
}());
