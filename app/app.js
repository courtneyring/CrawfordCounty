
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
            controller  : 'eventsController'
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

app.controller('eventsController', function($scope) {
    $scope.events = [
    {
        "name":"Event 1", 
        "date": [
            {"day":"3",
            "month":"April",
            "year":"2016",
            "weekDay":"Wednesday"
            },
            
        ],
        "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec"
    
    },
            {
        "name":"Event 2", 
        "date": [
            {"day":"3",
            "month":"April",
            "year":"2016",
            "weekDay":"Wednesday"
            },
            
        ],
        "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec"
    
    }
]
    
});
