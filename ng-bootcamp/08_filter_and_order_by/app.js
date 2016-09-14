angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;

    app.orderByField = 'lastName';

    app.setOrderByField = function(orderByField) {
      if(app.orderByField === orderByField) {
        orderByField = '-' + orderByField;
      }

      app.orderByField = orderByField;
    };

    var promise = $http.get('http://www.json-generator.com/api/json/get/cfbBFcRBpe');

    promise.then(function(result) {
      app.people = result.data;
    });

  })
;

