angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.addPerson = function(person) {
      app.people.push(person)
    };

    app.people = [
      {
        firstName: 'Joel',
        lastName: 'Hooks',
        company: 'egghead.io',
        email: 'joel@egghead.io'
      },
      {
        firstName: 'Becky',
        lastName: 'Wendell',
        company: 'Amazon',
        email: 'becky.wendell@amazon.com'
      },
      {
        firstName: 'Bernard',
        lastName: 'Rawlins',
        company: 'Kroger',
        email: 'brawl453@aol.com'
      },
      {
        firstName: 'Sara',
        lastName: 'Rawlins',
        company: 'Kroger',
        email: 'sara@kroger.com'
      }
    ]

  })
;

