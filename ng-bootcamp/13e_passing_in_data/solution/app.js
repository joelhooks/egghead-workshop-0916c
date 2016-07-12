angular.module('myapp', [])
  .controller('AppCtrl', function ($http) {
    var app = this;

    app.dallas = {
      street: '1321 Vasquez',
      city: 'Dallas'
    };

    app.chicago = {
      street: '730 S Clark',
      city: 'Chicago'
    };

  })

  .directive('address', function () {
    return {
      restrict: 'E',
      templateUrl: 'address.tpl.html',
      scope: {
        address: '='
      }
    };
  })
;
