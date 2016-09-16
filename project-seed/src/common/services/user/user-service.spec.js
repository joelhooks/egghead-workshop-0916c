describe('userService', function() {
  var userService,
    allUsers,
    $httpBackend;

  angular.module('project-seed.config.constants', [])
    .constant('baseApiUrl', '/api');

  beforeEach(module('ps.services.user'));

  beforeEach(inject(function(_userService_, _$httpBackend_) {
    userService = _userService_;
    $httpBackend = _$httpBackend_;

    setupMocks();
  }));

  it('should create an instance of userService', function() {
    expect(userService).toBeDefined();
  });

  describe('getUsers', function() {
    it('should resolve with users when called', function() {
      userService.getUsers().then(function(users) {
        expect(users.length).toBeGreaterThan(0);
      });

      $httpBackend.flush();
    })
  });

  function setupMocks() {
    jasmine.getJSONFixtures().fixturesPath = 'base/data/users/';
    allUsers = getJSONFixture('default.json');

    $httpBackend.whenGET('/api/users').respond(allUsers);
  }
});