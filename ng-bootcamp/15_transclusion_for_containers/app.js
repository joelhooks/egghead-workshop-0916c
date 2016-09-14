angular.module('exampleApp', [])

  .directive('headline', function () {
    return {
      restrict: 'E',
      transclude:true,
      scope: {
        text: '@' // attribute (string) binding
      },
      template: '<h1 ng-transclude>{{text}}</h1ng-transclude><p ></p>'
    }; // directive definition object DDO
  })

  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;
  })

;

