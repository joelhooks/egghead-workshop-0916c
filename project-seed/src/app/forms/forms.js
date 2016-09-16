angular.module('ps.forms', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('forms', {
        url: '/forms',
        templateUrl: 'forms/forms.tpl.html',
        controller: 'FormExampleCtrl as formExample'
      })
  })

  .controller('FormExampleCtrl', function() {
    var formExample = this;

    formExample.submit = function(formIsValid) {
      if(formIsValid) {
        //do stuff!
        formExample.person = {};
      }
    }
  })

  //passwordValidator
  // check that there is at least 1 digit
  // /\d+/
  // pattern.test(value)

  .directive('hasNameValidator', function() {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModel) {

        ngModel.$validators.hasName = function(modelValue) {
          var valid = true;
          if(modelValue) {
            valid = modelValue.toLowerCase().includes(attrs.hasNameValidator.toLowerCase());
          }
          return valid;
        }
      }
    }
  })

;