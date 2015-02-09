angular.module('starter.controllers', [])

.controller('MyCtrl', function($scope, $ionicHistory ) {
  $scope.myGoBack = function() {
    $ionicHistory.nextViewOptions({
        disableAnimate: true,
//        disableBack: true
    });
    $ionicHistory.goBack();
  };
})

.controller('HomeCtrl', function($scope) {})

.controller('CasesCtrl', function($scope, Cases) {
  $scope.cases = Cases.all();
  $scope.remove = function(chat) {
    Cases.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Cases) {
  $scope.chat = Cases.get($stateParams.chatId);
})

.controller('DonatersCtrl', function($scope, Donaters) {
  $scope.donaters = Donaters.all();
})

.controller('RegDonaterCtrl', function($scope, $stateParams, WizardHandler) {
//  $scope.friend = Donaters.get($stateParams.friendId);
    today = new Date();
    $scope.last_doanteion_date = new Date();
    $scope.hide_prev = true;
    $scope.wz_next = function(){
        WizardHandler.wizard().next();      
        $scope.hide_prev = false;
    };
    $scope.wz_previous = function(){
         WizardHandler.wizard().previous();
         if(WizardHandler.wizard().currentStepNumber() === 1)
             $scope.hide_prev = true;
    };

    $scope.pick_date = function(){
        var options = {
            date: $scope.last_doanteion_date,
            mode: 'date'
        };

        datePicker.show(options, function (date) {
//            alert("date result " + date);
            $scope.$apply(function () {
                $scope.last_doanteion_date = date;
                }
            )
        });
    };
})

.controller('InfoCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
