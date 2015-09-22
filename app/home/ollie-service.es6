(function () {
  'use strict';

  class Ollie {
    constructor() {
      this.name = 'Ollie';
      this.botControls = [
        {
          key: 65,
          input: "a",
          text: "Left",
          action: this.left()
        }, {
          key: 68,
          input: "d",
          text: "Right",
          action: this.right()
        }, {
          key: 83,
          input: "s",
          text: "Back",
          action: this.back()
        }, {
          key: 87,
          input: "w",
          text: "Forward",
          action: this.forward()
        }
      ];
    }


    trigger(event){
      for(let ctrl of this.botControls){
        if(ctrl.key == event.keyCode){
          console.log('action triggered from service', ctrl.input);
          // ctrl.action()
        }
      }
    }



    forward(){
      console.log('service: forward');
      // $http.post('/api/robots/ngdrone/devices/drone/commands/front', {speed: speed} );
    }

    back(){
      console.log('service: back');
      // $http.post('/api/robots/ngdrone/devices/drone/commands/back', {speed: speed} );
    }

    left(){
      console.log('service: left');
      // $http.post('/api/robots/ngdrone/devices/drone/commands/left', {speed: speed} );
    }

    right(){
      console.log('service: right');
      // $http.post('/api/robots/ngdrone/devices/drone/commands/right', {speed: speed} );
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
