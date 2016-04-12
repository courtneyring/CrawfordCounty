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
            {"day":"10",
            "month":"April",
            "year":"2016",
            "weekDay":"Wednesday"
            },
            
        ],
        "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec"
    
    }
]
    
});