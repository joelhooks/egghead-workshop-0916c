angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;
  })
  .directive('simple', function() {
    console.log('simple directive configured');
    return {
      link: function postLink() {
        console.log('I am a humble directive that just does this. ' + Math.random());
      }
    }; // Directive Definition Object DDO
  })

;

