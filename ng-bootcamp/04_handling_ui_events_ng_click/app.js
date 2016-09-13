angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.firstName = 'Joel';
    app.lastName = 'Hooks';

    app.submitName = function(firstName, lastName) {
      // we can do whatever we need to.
      app.firstName = firstName;
      app.lastName = lastName;
    }
  })
;

