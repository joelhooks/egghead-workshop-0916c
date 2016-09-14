angular.module('exampleApp', [])
  .directive('tabs', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: 'TabsCtrl as tabs',
      templateUrl: 'tabs.html'
    };
  })

  .controller('TabsCtrl', function TabsCtrl() {
    var tabs = this;

    tabs.registeredTabs = [];

    tabs.selectTab = function(tab) {
      if (tabs.selectedTab) {
        tabs.selectedTab.selected = false;
      }
      tab.selected = true;
      tabs.selectedTab = tab;
    };

    tabs.registerTab = function(tab) {
      if(!tabs.selectedTab) {
        tabs.selectTab(tab);
      }
      tabs.registeredTabs.push(tab)
    };

    console.log('The TabsCtrl!!')
  })

  .directive('tab', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        label: '@' // attribute (string) binding
      },
      require: '^tabs',
      template: '<div ng-if="selected" ng-transclude></div>',
      link: function(scope, elem, attrs, tabsCtrl) {
       tabsCtrl.registerTab(scope);
      }
    };
  })


  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;
  })

;

