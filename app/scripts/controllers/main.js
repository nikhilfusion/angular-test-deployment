'use strict';

/**
 * @ngdoc function
 * @name angularTestDeploymentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestDeploymentApp
 */
angular.module('angularTestDeploymentApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
