app.controller('historyController', function($scope) {
  $scope.events = [{
    badgeClass: 'info',
    title: 'Title1',
    id: 'panel1',
    content: 'Description Here',
    image: 'img1.jpg'
  }, {
    badgeClass: 'warning',
    title: 'December 20, 1922',
    id: 'panel2',
    content: 'Description of Picture',
    image: 'img2.jpg'
  },
                    {
    badgeClass: 'info',
    title: '1955',
    id: 'panel3',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipisci {{eventide}}ng elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede'
  },
                  {
    badgeClass: 'info',
    title: 'First heading',
    id:'panel4',
    content: 'Some awesome content.',
    image: 'img3.jpg'
  },
                  {
    badgeClass: 'info',
    title: 'Old Cars: Title of Picture',
    id:'panel5',
    content: 'Date of Picture',
    image: 'img3.jpg'
  },
                  {
    badgeClass: 'info',
    title: '1955',
    id:'panel6',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede'
  
  }];
    
    
    	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};
});