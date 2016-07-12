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
  //create a directive to accept addresses and display them
  //use an external template!
;
