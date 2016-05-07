
var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'angular-timeline']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider


        .when('/', {
            templateUrl : 'app/components/history/history.html',
            controller  : 'historyController'
        })

        .when('/about', {
            templateUrl : 'app/components/about/about.html',
            controller  : 'aboutController'
        })
    
        .when('/events', {
            templateUrl : 'app/components/events/events.html',
            controller  : 'eventsController'
        })

        .when('/membership', {
            templateUrl : 'app/components/membership/membership.html',
            controller  : 'homeController'
        })
    
        .when('/history', {
            templateUrl : 'app/components/history/history.html',
            controller  : 'historyController'
        })
    
        .when('/museum', {
            templateUrl : 'app/components/museum/museum.html',
            controller  : 'galleryController'
        })
        .when('/museum/gallery', {
            templateUrl : 'app/components/museum/gallery/gallery.html',
            controller  : 'galleryController'
        });
    
        $locationProvider.html5Mode(true);
});


// create the controller and inject Angular's $scope
app.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.navbarCollapsed = true;
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('indexController', function($scope) {
  $scope.isCollapsed = false;
});
