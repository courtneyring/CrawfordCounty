/*app.factory('eventFactory',function($scope, $http){
    var service = {}
    var data = []
    
    service.getData = function(){
        $http.get('/app/components/history/timeline.json').success(function(data) {
            return data;
        });    
    
    }
    
    service.getEvents = function(section){
        $scope.events = data[section]
    }
    
    return service;
    
)}*/


app.controller('historyController', function($scope, $http) {
    
    
    $http.get('/app/components/history/timeline.json').success(function(data) {
        $scope.data = data
        $scope.selected = 'downtown'
        $scope.events = $scope.data["downtown"];
    });    

    $scope.getEvents=function(section){
        $scope.selected = section;
        var data = $scope.data
        $scope.events = data[section]
    }
    
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

/*app.controller('myFactoryCtrl', function ($scope, myFactory) {
  $scope.artist = myFactory.getArtist()
})

app.factory('myFactory', function () {
  var _artist = '';
  var service = {}

  service.getArtist = function () {
    return _artist
  }

  return service;
})


app.factory('myFactory', function ($http, $q) {
  var service = {};
  var baseUrl = 'https://itunes.apple.com/search?term=';
  var _artist = '';
  var _finalUrl = '';

  var makeUrl = function () {
    _artist = _artist.split(' ').join('+');
    _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
    return _finalUrl;
  }

  return service;
});*/