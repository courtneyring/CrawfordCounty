
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
            templateUrl : '/app/components/home/index.html',
            controller: 'indexController'
        })
        .when('/', {
            templateUrl : '/app/components/home/index.html',
            controller: 'indexController'
        })

        .when('/events', {
            templateUrl : '/app/components/events/index.html', 
            controller: 'eventsController'
        })
        .when('/about', {
            templateUrl : '/app/components/about/index.html',
        })

        .when('/about/support', {
            templateUrl : '/app/components/about/support.html',
            controller  : 'supportController'
        })
    
        .when('/about/board-of-directors', {
            templateUrl : '/app/components/about/board-of-directors.html', 
            
        })
    
        .when('/history', {
            templateUrl : '/app/components/history/index.html',
            controller  : 'historyController'
        })
        .when('/newsletters', {
            templateUrl : '/app/components/newsletters/index.html',
            controller  : 'newslettersController'

        })
        .when('/contact', {
            templateUrl : '/app/components/contact/index.html',
            controller : 'contactController'

        })
        .when('/exhibits', {
            templateUrl : '/app/components/exhibits/index.html'
        })
    
        .when('/exhibits/:exhibit_id', {
            templateUrl : function(params){return '/app/components/exhibits/'+ params.exhibit_id+'.html'; },
            controller : "exhibitsController"
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

app.controller('MainCtrl', function($scope, $location, $window) {
    $scope.$on('$routeChangeSuccess', function () {
        document.getElementById("url").value = window.location.href;
        //$scope.url = window.location.href;
        $window.ga('send', 'pageview', { page: $location.url() });
    });
});

