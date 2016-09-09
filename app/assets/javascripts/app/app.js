angular
  .module("learnplace", ['ui.router','templates', 'Devise'])
  .config(function ($stateProvider, $urlRouterProvider, AuthProvider) {
    console.log("hello world app.js")

    $stateProvider
        // default route
        .state('home', {
           url: '/',
           templateUrl: 'home.html',
           controller: 'HomeController'
        })
        // list all schools
        .state('home.schools_index', {
          url: 'schools',
          templateUrl: 'schools/index.html',
          controller: 'IndexController',
          resolve: {
            schools: function(SchoolService){
              return SchoolService.list();
            }
          }
        })
        // list all courses by school_id
        .state('home.schools_courses', {
          url: 'schools/:school_id/courses',
          templateUrl: 'courses/index.html',
          controller: 'CoursesController',
          resolve: {
            school: function($stateParams, SchoolService){
              return SchoolService.get($stateParams.school_id);
            },
            courses: function($stateParams, CourseService) {
              return CourseService.list($stateParams.school_id);
            }
          }
        })
        // list all chapters by school_id and course_id
        .state('home.schools_courses_chapters', {
          url: 'schools/:school_id/courses/:course_id/chapters',
          templateUrl: 'chapters/index.html',
          controller: 'ChaptersController'
        })
        // login flow
        .state('home.login', {
          url: 'login',
          templateUrl: 'logins/new.html',
          controller: 'LoginController'
        })
        // creates a new school
        .state('home.school_new', {
          url: 'schools_new',
          templateUrl: 'schools/new.html',
          controller: 'NewController'
        })
        // registration flow
        .state('home.signup', {
          url: 'signup',
          templateUrl: 'registrations/new.html',
          controller: 'RegistrationController'
        });

        // if non of routes found, show a default one
        $urlRouterProvider.otherwise('/');

      });
