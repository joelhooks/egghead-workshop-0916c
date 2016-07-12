angular.module('app', [])
  .directive('colorChange', function () {

    var colors = ['#ff0000', '#00ff00', '#0000ff'];

    var getRandomColor = function () {
      return colors[Math.floor(Math.random() * colors.length)];
    };

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        var changeColor = function () {
          element.css('background-color', getRandomColor())
        };

        element.on('click', changeColor);

        scope.$on('$destroy', function () {
          //good practice to destroy listeners or you'll get leaks!
          element.off('click', changeColor);
        });
      }
    };
  })
;
