angular.module('app.components.people-list', [])
  .directive('peopleList', function () {
    return {
      restrict: 'E',
      scope: {
        people: '=' // two-way object binding
      },
      controller: 'PeopleListCtrl as peopleList',
      templateUrl: 'people-list.html'
    }; // directive definition object DDO
  })

  .controller('PeopleListCtrl', function PeopleListCtrl() {
    var peopleList = this;

    peopleList.orderByField = 'lastName';

    peopleList.filterModelOptions = {
      debounce: 100,
      allowInvalid: true
    };

    peopleList.setOrderByField = function (orderByField) {
      if (peopleList.orderByField === orderByField) {
        orderByField = '-' + orderByField;
      }

      peopleList.orderByField = orderByField;
    };
  })




;