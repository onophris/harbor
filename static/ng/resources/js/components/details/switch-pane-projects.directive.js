(function() {
  
  'use strict';
  
  angular
    .module('harbor.details')
    .directive('switchPaneProjects', switchPaneProjects);

  SwitchPaneProjectsController.$inject = ['$scope', '$routeParams'];

  function SwitchPaneProjectsController($scope, $routeParams) {
    var vm = this;
    
    $scope.$on('isOpen', function(e, val){
      vm.isOpen = val;
    });
    
    $scope.$watch('vm.selectedProject', function(current, origin) {
      if(current){
        vm.projectName = current.Name;  
      }
    });
    
    vm.switchPane = switchPane;
    
    function switchPane() {
      if(vm.isOpen) {
        vm.isOpen = false;
      }else{
        vm.isOpen = true;
      }
    }
  }
  
  function switchPaneProjects() {
    var directive = {
      restrict: 'E',
      templateUrl: '/static/ng/resources/js/components/details/switch-pane-projects.directive.html',
      replace: true,
      scope: {
        'selectedProject': '=',
        'isOpen': '='
      },
      controller: SwitchPaneProjectsController,
      controllerAs: 'vm',
      bindToController: true
    }
    
    return directive;
  
  }
  
})();