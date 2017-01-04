
var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'angular-timeline', 'angular-scroll-animate']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider


        .when('/', {
            templateUrl : '/~cering/app/components/home/home.html',
            controller  : 'homeController'
        })

        .when('/about', {
            templateUrl : '/~cering/app/components/about/about.html',
            controller  : 'aboutController'
        })
    
        .when('/events', {
            templateUrl : '/~cering/app/components/events/events.html',
            controller  : 'editController'
        })
    
        .when('/events/edit', {
            templateUrl : '/~cering/app/components/events/edit.html',
            controller  : 'editController'
        })
        .when('/membership', {
            templateUrl : '/~cering/app/components/membership/membership.html',
            controller  : 'homeController'
        })
    
        .when('/history', {
            templateUrl : '/~cering/app/components/history/history.html',
            controller  : 'historyController'
        })
    
        .when('/museum', {
            templateUrl : '/~cering/app/components/museum/museum.html',
            controller  : 'galleryController'
        })
        .when('/museum/exhibits', {
            templateUrl : '/~cering/app/components/museum/exhibits/exhibits.html',
            controller  : 'exhibitsController'
        })
        .when('/museum/gallery', {
            templateUrl : '/~cering/app/components/museum/gallery/gallery.html',
            controller  : 'galleryController'
        });
    
        /*$locationProvider.html5Mode(true);*/
});


// create the controller and inject Angular's $scope
app.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.status = {
        isopen: false
      };

      $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
      };

      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
});

