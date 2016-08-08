'use strict';

/**
 * @ngdoc function
 * @name angularTestDeploymentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestDeploymentApp
 */
angular.module('angularTestDeploymentApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
