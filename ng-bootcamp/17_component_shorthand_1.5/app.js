angular.module('exampleApp', [])

  .component('simple', {
    bindings: {
      label: '@'
    },
    template: '<h1>{{ $ctrl.label }}</h1>'
  })

  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;
  })


;

