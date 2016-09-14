angular.module('app.services.people', [])

  .factory('Person', function() {
    function Person(data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.company = data.company;
      this.email = data.email;

      this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
      }
    }
    return Person;
  })

  .service('peopleService', function PeopleService($http, config, Person) {
    var peopleService = this;

    peopleService.getPeople = function () {
      return $http.get(config.apiUrl + 'cfbBFcRBpe').then(function (results) {
        return results.data.map(function(person) {
          return new Person(person);
        })
      })
    }

  })

;