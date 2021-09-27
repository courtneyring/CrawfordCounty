app.controller('newslettersController', function($scope) {
     $scope.oneAtATime = true;

      $scope.groups = [
          {
              title: '2021',
              content: ['June']
          },
          {
              title: '2014',
              content: ['Spring','June','Winter']
          },
          {
              title: '2013',
              content: ['January-February','March-April','May','June','July','August','September','October','November-December']
          },
          {
              title: '2012',
              content: ['January-February','March-April','May','June','July','August','September','October','November-December']
          },
          {
              title: '2011',
              content: ['January-February','March-April','May','June','July','August','September','October','November-December']
          },
          {
              title: '2010',
              content: ['Spring','June','July']
          },
          {
              title: '2009',
              content: ['August-September','October-November']
          },
          {
              title: '2008',
              content: ['January','February','March', 'April','May','June','July','August-September','October']
          },
          {
              title: '2007',
              content: ['January','February','March', 'April','May','June','July','August','September','October','November','December']
          },
          {
              title: '2006',
              content: ['December']
          },
       
      ];

      $scope.items = ['Item 1', 'Item 2', 'Item 3'];

      $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
      };

      $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
      };
});