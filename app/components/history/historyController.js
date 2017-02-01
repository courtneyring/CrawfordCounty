app.controller('historyController', function($scope, $http) {
  //$scope.events = "timeline.json"
  $http.get('/~cering/app/components/history/timeline.json').success(function(data) {
        // you can do some processing here
        $scope.events = data;
    });    

    
    	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};
});