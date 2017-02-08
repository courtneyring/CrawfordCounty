
var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'angular-timeline', 'angular-scroll-animate']);

app.config(function($routeProvider, $locationProvider, $httpProvider) {
    
    /*myApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {*/
    $httpProvider.defaults.cache = false;
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    // disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

    $routeProvider


        .when('/index', {
            templateUrl : '/~cering/app/components/home/index.html',
            controller  : 'homeController'
        })
        .when('/', {
            templateUrl : '/~cering/app/components/home/index.html',
            controller  : 'homeController'
        })

        .when('/about', {
            templateUrl : '/~cering/app/components/about/index.html',
            controller  : 'aboutController'
        })

        .when('/about/support', {
            templateUrl : '/~cering/app/components/about/support.html'
        })
    
        .when('/about/board-of-directors', {
            templateUrl : '/~cering/app/components/about/board-of-directors.html'
        })
    
        .when('/history', {
            templateUrl : '/~cering/app/components/history/index.html',
            controller  : 'historyController'
        })
        .when('/newsletters', {
            templateUrl : '/~cering/app/components/newsletters/index.html',
            controller  : 'newslettersController'

        })
        .when('/contact', {
            templateUrl : '/~cering/app/components/contact/index.html'

        })
        .when('/exhibits', {
            templateUrl : '/~cering/app/components/exhibits/index.html'
        })
    
        .when('/exhibits/:exhibit_id', {
            templateUrl : function(params){return '/~cering/app/components/exhibits/'+ params.exhibit_id+'.html'; }
    
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

