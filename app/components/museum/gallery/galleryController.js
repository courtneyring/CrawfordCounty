
app.controller('galleryController', function($scope) {
    $scope.images= [];
    for(i=0; i<35; i++){
        $scope.images.push("gallery"+i+".jpg");
    }
    

});