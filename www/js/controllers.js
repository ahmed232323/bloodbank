angular.module('starter.controllers', [])

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

.controller('FriendDetailCtrl', function($scope, $stateParams, Donaters) {
  $scope.friend = Donaters.get($stateParams.friendId);
})

.controller('InfoCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
