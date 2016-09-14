angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;
  })
  .directive('simple', function() {
    console.log('simple directive configured');
    return {
      link: function (scope, elem, attrs) {
        function changeColor() {
          elem.css('color', attrs.simple || 'red');
        }

        elem.on('click', changeColor);

        scope.$on('$destroy', function() {
          elem.off('click', changeColor)
        })
      }
    }; // Directive Definition Object DDO
  })

;

