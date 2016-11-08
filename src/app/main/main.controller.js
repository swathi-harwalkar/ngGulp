(function() {
  'use strict';

  angular
  .module('psi')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController(TestCenterService) {
    var vm = this;

    vm.searchObj = {};

    vm.searchObj.distance  = "5";

    vm.search = function(){
      TestCenterService.search().then(function(response){
        vm.testCenters =  response;   
      });
    }
    
  }
})();
