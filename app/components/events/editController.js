app.controller('editController', function($scope, $http) {
    $scope.events = [
        {"name":"event0", "date":"7/11"},
        {"name":"event1", "date":"7/11"},
        {"name":"event2", "date":"7/11"},
        {"name":"event3", "date":"7/11"},
        {"name":"event4", "date":"7/11"}
        
    ];
/*$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    
    $http.get("assets/json/events.json")
    .then(function(response) {
        $scope.events = response.data;
    });*/
    
    $scope.removeEvent=function(indexNum){
        delete $scope.events.splice(indexNum,1);
    };
    
    $scope.eventName = "";
    $scope.eventDate = "";
    
    $scope.addEvent=function(){
        $scope.events.splice(0, 0, {"name":$scope.eventName, "date":$scope.eventDate});
        
        $scope.eventName="";
        $scope.eventDate="";
    };
    
    $scope.saveData=function(){

        $http({
            url: 'assets/json/events.php',
            method: 'POST',
            data: {
                name: $scope.eventName,
                date: $scope.eventDate
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencode"
            }
        }).success(function(response){
            $scope.response = response;
        }).error(function(error){
            $scope.error = error;
        });
        /*
        console.log($scope.error);
        $http({
          url: 'assets/json/events.json',
          method: "POST",
          data: angular.toJson($scope.events),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
        /*
        $http({
            method:'POST',
            url:'assets/json/events.json', 
            content: 'json',
            data: {name:$scope.events},
            
        })
        .then(function(resonse){
            console.log('success');
        })
    */}
    
});