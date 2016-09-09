(function () {
  'use strict';
  angular
    .module("learnplace")

    // controller for a new school
    .controller("NewController", ['$scope', '$filter', '$state', 'SchoolService', function($scope, $filter, $state, SchoolService){

      // defind an empty model
      $scope.school = {
        name: ''
      };
      $scope.errors = [];

      // creates a new school
      $scope.create = function() {
        SchoolService.create($scope.school).then(function(result){
          // after successful call, redirect to school list
          $state.go('home.schools_index');
        }, function(response){
          $scope.errors = response.data.errors;
        });
      }
    }])

    // list all schools
    .controller("IndexController", function(schools, SchoolService, Auth, $scope, $filter) {
      var DATA = schools.data;
      $scope.schools = DATA;

      $scope.handle = '';

      $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
      };

      $scope.query = '';

      $scope.update = function(school){
        school.edit = false;
        // update school by sending to service
        SchoolService.update(school);
      };

      $scope.doSearch = function(){
        $scope.schools = DATA.filter(function(item){
          return item.name.indexOf($scope.query) != -1;
        });
      };


    });
})();
