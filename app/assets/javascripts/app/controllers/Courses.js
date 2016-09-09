(function () {
  'use strict';
  angular
    .module("learnplace")
    .controller("CoursesController", ['$scope', '$http', '$stateParams', 'SchoolService', 'CourseService', 'school', 'courses', function($scope, $http, $stateParams, SchoolService, CourseService, school, courses) {

      var DATA = courses.data;
      $scope.courses = DATA;
      var endpoint = '/api/v1/schools/' + $stateParams.school_id + '/courses';

     // defind an empty model
      $scope.course = {
        name: '',
        description: ''
      };
      $scope.query = '';
      $scope.school_name = '';

      $scope.doSearch = function(){
        // filter loaded list
        $scope.courses = DATA.filter(function(item){
          return item.name.indexOf($scope.query) != -1;
        });
      };


      $scope.update = function(course){
        // on update set to edit to make sure
        // we hided update link and showed edit back
        course.edit = false;
        CourseService.update(course);
      };

      $scope.create = function(){
        var success = function(response){
          DATA.push(response.data);
          // clear model after successful call
          $scope.course = {
            name: '',
            description: ''
          };
        };
        var unsuccess = function(response){
          $scope.errors = response.data.errors;
        };
        // post course data with 2 callbacks, success, unsuccess
        $http.post(endpoint, $scope.course).then(success, unsuccess);
      };

      $scope.school_name = school.data.name;


    }]);
})();
