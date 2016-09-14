angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;

    var promise = $http.get('http://www.json-generator.com/api/json/get/cfbBFcRBpe');

    promise.then(function(result) {
      app.people = result.data;
    });

  })
;

