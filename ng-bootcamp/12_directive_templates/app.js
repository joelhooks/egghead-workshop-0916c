angular.module('exampleApp', [])

  .directive('peopleList', function() {
    return {
      restrict: 'E',
      templateUrl: 'people-list.html'
    }; // directive definition object DDO
  })


  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;

    app.orderByField = 'lastName';

    app.filterModelOptions = {
      debounce: 100,
      allowInvalid: true
    };

    app.setOrderByField = function (orderByField) {
      if (app.orderByField === orderByField) {
        orderByField = '-' + orderByField;
      }

      app.orderByField = orderByField;
    };

    var promise = $http.get('http://www.json-generator.com/api/json/get/cfbBFcRBpe');

    promise.then(function (result) {
      app.people = result.data;
    });
  })
  .directive('headline', function() {
    return {
      restrict: 'E',
      template: '<h1>This is a headline.</h1>'
    }; // directive definition object DDO
  })

;

