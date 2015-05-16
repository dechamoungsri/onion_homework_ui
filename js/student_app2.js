var app = angular.module('studentViewApp', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/studenthome/studentDate")

  $stateProvider
    
    .state('studenthome', {
        url: "/studenthome",
        templateUrl: "views/home.html"
    })
    .state('studenthome.studentDate', {
          url: "/studentDate",
          templateUrl: "views/studentViewSortedByDate.html",
          controller: 'StudentViewController'
      })
    .state('studenthome.studentSubject', {
          url: "/studentSubject",
          templateUrl: "views/studentViewBySubject.html",
          controller: 'StudentViewController'
      })  
  
    .state('route1', {
        url: "/route1",
        templateUrl: "route1.html"
    })
      .state('route1.list', {
          url: "/list",
          templateUrl: "route1.list.html",
          controller: function($scope){
            $scope.items = ["A", "List", "Of", "Items"];
          }
      })

    .state('route2', {
        url: "/route2",
        templateUrl: "route2.html"
    })
      .state('route2.list', {
          url: "/list",
          templateUrl: "route2.list.html",
          controller: function($scope){
            $scope.things = ["A", "Set", "Of", "Things"];
          }
      })
})

app.controller('StudentViewController', ['$scope', function($scope) {
  $scope.homeworks = [
      {
        title: 'Homework A',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
    {
        title: 'Homework B',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
    {
        title: 'Homework C',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
        {
        title: 'Homework C',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
        {
        title: 'Homework C',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
        {
        title: 'Homework C',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
  ];
    
  $scope.subjects = [
      {
        title: 'Math', 
        homeworks: [
          {
            title: 'Homework A',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            title: 'Homework B',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            title: 'Homework C',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          }
        ]
      },
    {
        title: 'Chem', 
        homeworks: [
          {
            title: 'Homework D',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            title: 'Homework E',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            title: 'Homework F',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          }
        ]
      },
    {
        title: 'Phys', 
        homeworks: [
          {
            title: 'Homework G',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            title: 'Homework H',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            title: 'Homework I',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          }
        ]
      }
  ]
  
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