angular.module("eventController", [])
  .controller("mainController", function($scope, $http, Events) {
    $scope.formData = {};

    Events.get()
      .success(function(data) {
        $scope.events = data;
      });

    $scope.createEvent = function() {
      Events.create($scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.events = data;
        });
    };

    $scope.deleteEvent = function(id) {
      Events.delete(id)
      .success(function(data) {
        $scope.events = data;
      });
    };

  });
