
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider


        .when('/', {
            templateUrl : 'app/components/home/home.html',
            controller  : 'homeController'
        })

        .when('/about', {
            templateUrl : 'app/components/about/about.html',
            controller  : 'aboutController'
        })
    
        .when('/events', {
            templateUrl : 'app/components/events/events.html',
            controller  : 'homeController'
        })

        .when('/membership', {
            templateUrl : 'app/components/membership/membership.html',
            controller  : 'homeController'
        });
});

// create the controller and inject Angular's $scope
app.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});
