angular.module('exampleApp', [])

  .directive('headline', function () {
    return {
      restrict: 'E',
      scope: {
        text: '@' // attribute (string) binding
      },
      template: '<h1>{{text}}</h1>'
    }; // directive definition object DDO
  })


  .directive('peopleList', function() {
    return {
      restrict: 'E',
      scope: {
        people: '=' // two-way object binding
      },
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

    $http.get('http://www.json-generator.com/api/json/get/bUstkZFvvS')
      .then(function (result) {
        app.morePeople = result.data;
      });
  })

;

