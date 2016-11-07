(function() {
  'use strict';

  angular
    .module('psi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(TestCenterService) {
    var vm = this;

    TestCenterService.search().then(function(response){
      vm.testCenters =  response;   
    });
    
  }
})();
