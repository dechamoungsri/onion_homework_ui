var app = angular.module('studentViewApp', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/studenthome/studentDate")
  //$urlRouterProvider.otherwise("/dohomework")

  $stateProvider
//    .state('dohomework'), {
//        url: "/dohomework",
//        templateUrl: "route1.html"
//    }
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
    .state('dohomework', {
        url: "/dohomework",
        templateUrl: "views/dohomework.html",
        controller: 'questionViewController'
    })
    .state('dohomework.questionId', {
        url: "/questionId/:itemId",
        templateUrl: "views/questionIdView.html",
        controller: 'questionWithIDViewController'
    })

})

app.controller('questionWithIDViewController', ['$scope', function($scope,  $state, $stateParams) {
  $scope.questions = [
      {question_id: 123, title: 'Homework A'},
      {question_id: 123, title: 'Homework A'},
      {question_id: 123, title: 'Homework A'},
      {question_id: 123, title: 'Homework A'},
  ]
  
  if($stateParams.itemId) {
    console.log($stateParams.itemId);
  }


}]);

app.controller('questionViewController', ['$scope', function($scope,  $state, $stateParams) {
  $scope.questions = [
      {question_id: 123, title: 'Homework A'},
      {question_id: 123, title: 'Homework A'},
      {question_id: 123, title: 'Homework A'},
      {question_id: 123, title: 'Homework A'},
  ]
  //console.log($stateParams.qid);

}]);

app.controller('StudentViewController', ['$scope', function($scope) {
  $scope.homeworks = [
      {
        question_id: 123, title: 'Homework A',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
    {
        question_id: 123, title: 'Homework B',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
    {
        question_id: 123, title: 'Homework C',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
        {
        question_id: 123, title: 'Homework C',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
        {
        question_id: 123, title: 'Homework C',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
        {
        question_id: 123, title: 'Homework C',
        description: 'Pipat is Gay',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
      },
  ];
    
  $scope.subjects = [
      {
        title: 'Math', 
        homeworks: [
          {
            question_id: 123, title: 'Homework A',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            question_id: 123, title: 'Homework B',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            question_id: 123, title: 'Homework C',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          }
        ]
      },
    {
        title: 'Chem', 
        homeworks: [
          {
            question_id: 123, title: 'Homework D',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            question_id: 123, title: 'Homework E',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            question_id: 123, title: 'Homework F',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          }
        ]
      },
    {
        title: 'Phys', 
        homeworks: [
          {
            question_id: 123, title: 'Homework G',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            question_id: 123, title: 'Homework H',
            description: 'Pipat is Gay',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiAcispLDx41n8BbRDZUntJJwZ9kqOWYHaZgkSu5KL1Zp-U9cPbQ'
          },
        {
            question_id: 123, title: 'Homework I',
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