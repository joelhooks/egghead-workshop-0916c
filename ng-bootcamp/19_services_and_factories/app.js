angular.module('exampleApp', [
  'app.components.people-list',
  'app.services.people'
])
  .constant('config', {
    apiUrl: 'http://www.json-generator.com/api/json/get/'
  })

  .controller('AppCtrl', function AppCtrl(peopleService) {
    var app = this;

    peopleService.getPeople().then(function(people) {

      console.log(people);
      app.people = people
    })
  })
;

