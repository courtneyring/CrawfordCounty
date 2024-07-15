app.controller('eventsController', function($scope) {
    // $('#myModal').modal()
    console.log($('#myModal'))

    $scope.showModal = function () {
        $('#myModal').modal('show')
    }

})