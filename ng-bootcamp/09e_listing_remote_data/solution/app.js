angular.module('netflix', [])
  .controller('NeflixActorSearchCtrl', function ($http) {
    var netflixActorSearch = this;

    netflixActorSearch.sortField = 'release_year';

    netflixActorSearch.updateSortField = function(sortField) {
      if(sortField === netflixActorSearch.sortField) {
        sortField = '-' + sortField;
      }
      netflixActorSearch.sortField = sortField;
    };

    netflixActorSearch.loadMoviesWith = function(actorName) {
      netflixActorSearch.actorName = '';
      netflixActorSearch.lastSearch = actorName;
      netflixActorSearch.movies = [];
      $http.get('http://netflixroulette.net/api/api.php?actor=' + escape(actorName))
        .then(function successHandler(result) {
          netflixActorSearch.movies = result.data;
          
        });
    }
  })
  .directive('errSrc', function () {
    // we haven't talked about this yet, but the broken images was annoying ;P
    return {
      link: function (scope, element, attrs) {
        element.bind('error', function () { // watch for an error event on the img
          if (attrs.src != attrs.errSrc) {
            attrs.$set('src', attrs.errSrc); // set the src to the contents of the attr
          }
        });
      }
    }
  })
;
