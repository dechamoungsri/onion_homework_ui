var app = angular.module('studentViewApp', ['ngRoute'])

//define routes for the app, each route defines a template and a controller
app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'views/studentViewSortedByDate.html',
      controller  : 'StudentViewController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);


app.controller('StudentViewController', ['$scope', function($scope) {
  $scope.homeworks = [
      {
        title: 'Homework A',
        description: 'Pipat is Gay',
        image: 'https://farm9.staticflickr.com/8455/8048926748_1bc624e5c9_d.jpg'
      },
    {
        title: 'Homework B',
        description: 'Pipat is Gay',
        image: 'https://farm9.staticflickr.com/8455/8048926748_1bc624e5c9_d.jpg'
      },
    {
        title: 'Homework C',
        description: 'Pipat is Gay',
        image: 'https://farm9.staticflickr.com/8455/8048926748_1bc624e5c9_d.jpg'
      },
  ];
  $scope.items = [
  	{
      name: 'pizza', 
      ingredients: ['cheese', 'tomato', 'oregano', 'salt']
    },
  	{
      name: 'tortilla', 
      ingredients: ['butter', 'salt', 'pepper', 'garlic']
    },
  	{
      name: 'cake', 
      ingredients: ['cream', 'sugar']
    },
  	{
      name: 'empanada', 
      ingredients: ['flour', 'meat', 'onion']
    },
  	{
      name: 'empanada', 
      ingredients: ['flour', 'meat', 'onion']
    },
  	{
      name: 'empanada', 
      ingredients: ['flour', 'meat', 'onion']
    },
  	{
      name: 'empanada', 
      ingredients: ['flour', 'meat', 'onion']
    }
  ];
}]);