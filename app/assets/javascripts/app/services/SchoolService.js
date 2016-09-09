// REST service to communicate with backend api (RAILS)
function SchoolService($http) {
  var services = {};
  // defind a beggining of an endpoint
  var endpoint = '/api/v1/schools';

  services.get = function(school_id) {
     return $http.get(endpoint + '/' + school_id);
  }
  services.list = function() {
    return $http.get(endpoint);
  }

  services.update = function(school){
    $http.put(endpoint + '/' + school.id, {
      name: school.name
    });
  }

  services.create = function(school) {
    var promise = $http.post(endpoint, {
        school: school
    });
    return promise;
  }

  return services;
}

angular
  .module('learnplace')
  .factory('SchoolService', SchoolService);
