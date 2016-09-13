angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.submitPerson = function(person) {
      // we can do whatever we need to.
      app.person = {
        firstName: person.firstName,
        lastName: person.lastName
      };
    }
  })
;

