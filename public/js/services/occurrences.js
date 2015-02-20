angular.module("occurrenceService", [])

  .factory("Occurrences", function($http) {
    return {
      get : function() {
        return $http.get("/api/occurrences");
      },
      create : function(occurrenceData) {
        return $http.post("/api/occurrences", occurrenceData);
      },
      delete : function(id) {
        return $http.delete("/api/occurrences/" + id);
      }
    }
  });
