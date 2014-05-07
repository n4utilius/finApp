'use strict';

/* Controllers */

var cardControllers = angular.module('cardControllers', []);

cardControllers.controller('CardListCtrl', ['$scope', 'CardService',
  function($scope, CardService) {
    $scope.cards = CardService.query();
    $scope.orderProp = 'id';
  }]
);

/*
cardControllers.controller('CardDetailCtrl', ['$scope', '$routeParams', 'CardService',
  function($scope, $routeParams, CardService) {
    $scope.card = CardService.get({cardId: $routeParams.cardId}, function(card) {
      $scope.mainImageUrl = card.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
*/

cardControllers.controller('CardDetailCtrl', ['$scope', '$routeParams', 'CardService',
  function($scope, $routeParams, CardService) {
    $scope.id = $routeParams.cardId - 1
    $scope.cards = CardService.query();
    $scope.orderProp = 'id';
  }]
);
