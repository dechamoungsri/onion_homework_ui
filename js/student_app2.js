var app = angular.module('studentViewApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/teacherhome/dashboard")
  //$urlRouterProvider.otherwise("/dohomework")

  $stateProvider
//    .state('dohomework'), {
//        url: "/dohomework",
//        templateUrl: "route1.html"
//    }
  
    .state('teacherhome', {
        url: "/teacherhome",
        templateUrl: "views/homeTeacher.html",
        controller: "TeacherViewController"
    })
    .state('teacherhome.dashboard', {
        url: "/dashboard",
        templateUrl: "views/teacherDashboard.html",
        controller: "TeacherViewController"
    })
  
    .state('createhomework', {
        url: "/createhomework",
        templateUrl: "views/teacherCreateHomeWork.html",
        controller: "CreateHomeworkViewController"
    })
    .state('createhomework.questionnumber', {
        url: "/questionnumber/:questionId",
        templateUrl: "views/teacherQuestionEdit.html",
        controller: "CreateHomeworkViewController"
    })
    .state('createhomework.addnewquestion', {
        url: "/createhomework/addnewquestion",
        templateUrl: "views/teacherCreateHomeWork.html",
        controller: "CreateHomeworkViewController"
    })
  
  
  // Student View Call here
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
//    .state('dohomework.questionId.show', {
//        url: "/questionId/:itemId/:partyLocation",
//        templateUrl: "route1.html",
//    })

});

app.controller('CreateHomeworkViewByIdController', ['$scope', function($scope,  $state, $stateParams) {
  $scope.questions = [
      {question_id: 1, title: 'Homework A', question_text: 'What is it?'},
      {question_id: 2, title: 'Homework A', question_text: 'What is that?'},
      {question_id: 3, title: 'Homework A', question_text: 'What there?'},
      {question_id: 4, title: 'Homework A', question_text: 'What those?'},
  ];
    
  $scope.questionText = 'Oh Yeahhhhhhh!!!'
    
  $scope.newQuestion = function() {
    $scope.questions.push({
        question_id: 5, title: 'Homework A', question_text: $scope.questionText
    });
  };

  $scope.textChange = function() {
    
  }
    
  //console.log($stateParams.qid);

}]);

app.controller('CreateHomeworkViewController', ['$scope', function($scope,  $state, $stateParams) {
  $scope.questions = [
      {question_id: 1, title: 'Homework A', question_text: 'What is it?'},
      {question_id: 2, title: 'Homework A', question_text: 'What is that?'},
      {question_id: 3, title: 'Homework A', question_text: 'What there?'},
      {question_id: 4, title: 'Homework A', question_text: 'What those?'},
  ];
    
  $scope.questionText = 'Oh Yeahhhhhhh!!!'
    
  $scope.newQuestion = function() {
    $scope.questions.push({
        question_id: 5, title: 'Homework A', question_text: $scope.questionText
    });
  };

  $scope.textChange = function() {
    
  }
    
  //console.log($stateParams.qid);

}]);


app.controller('TeacherViewController', ['$scope','$http', function($scope,$http) {
  $http.get('data/homeworks.json').success(function(data) {
     $scope.homeworks = data;
  });
    
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
  
}]);

app.controller('AnswerSubmitController', ['$scope', function($scope) {
  //$scope.list = [];
  $scope.answertext = 'hello';
  $scope.submit = function() {
      //$scope.list.push(this.text);
      //$scope.text = '';
        $scope.motherChecker = $scope.answertext
        $scope.answerSubmited = true
        console.log($scope.motherChecker)
    
  };
  $scope.motherChecker = 'This is mother checker';
  $scope.showAnswer = false;
    
  $scope.toggle = function() {
    //  $scope.answerSubmited = $scope.answerSubmited
    $scope.showAnswer = true;//!$scope.showAnswer
    //$scope.answertext = $scope.motherChecker
  };
    
  $scope.answerSubmited = false;
  $scope.closeAnswerPopUp = function() {
    $scope.answerSubmited = false;
  }
    
}]);

app.controller('questionWithIDViewController', ['$scope', '$stateParams', function($scope, $stateParams) {
  
  console.log($stateParams.itemId);

  $scope.currentquestion = {
    question_id : $stateParams.itemId,
    question_order: $stateParams.itemId,
    question_text: 'Is Pipat Super Gayyyyyyyyyyyy ?'
    };
  
}]);

app.controller('questionViewController', ['$scope', function($scope,  $state, $stateParams) {
  $scope.questions = [
      {question_id: 1, title: 'Homework A', question_text: 'What is it?'},
      {question_id: 2, title: 'Homework A', question_text: 'What is that?'},
      {question_id: 3, title: 'Homework A', question_text: 'What there?'},
      {question_id: 4, title: 'Homework A', question_text: 'What those?'},
  ];
  //console.log($stateParams.qid);

}]);

app.controller('StudentViewController', ['$scope','$http', function($scope, $http) {
  $http.get("data/homeworks.js").success(function(data) {
     $scope.homeworks = data;
     console.log(data);
  });
    
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
  
}]);