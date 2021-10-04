app.controller('exhibitsController', function($scope, $location) {
    $scope.currentPage = '/#'+$location.url()

    $scope.range = function(min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };
})