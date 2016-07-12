angular.module('exampleApp', [])
  .directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'tabs.html',
      controller: 'TabsCtrl as tabs'
    }; // Directive Definition Object DDO
  })
  .controller('TabsCtrl', function() {
    var tabs = this;

    tabs.registeredTabs = [];
    tabs.selectedTab = null;

    tabs.selectTab = function(tab) {
      tabs.selectedTab.selected = false;
      tab.selected = true;
      tabs.selectedTab = tab;
    };

    tabs.registerTab = function(tab) {
      if(!tabs.selectedTab) {
        tab.selected = true;
        tabs.selectedTab = tab;
      }
      tabs.registeredTabs.push(tab);
    }
  })
  .directive('tab', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        label: '@'
      },
      require: '^tabs',
      template: '<div ng-if="selected" ng-transclude></div>',
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.registerTab(scope);
      }
    }; // Directive Definition Object DDO
  })
;
