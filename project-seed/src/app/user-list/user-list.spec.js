describe('UserListCtrl', function() {
  var userList,
    userService;

  beforeEach(module('ps.user-list'));
  beforeEach(inject(function($controller) {
    createMockService();
    userList = $controller('UserListCtrl', {
      userService: userService
    });
  }));

  it('should create an instance', function() {
    expect(userList).toBeDefined();
  });

  it('should call getUsers when instantiated', function() {
    expect(userService.getUsersWasCalled).toBe(true);
  });

  it('should set the users when a result is received from getUsers', function() {
    expect(userList.users).toBeDefined();
  });

  function createMockService() {
    userService = {
      getUsersWasCalled: false,
      getUsers: function () {
        this.getUsersWasCalled = true;
        return {
          then: function (callback) {
            callback([])
          }
        }
      }
    };
  }
});