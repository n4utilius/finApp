'use strict';

/* App Module */

var cardApp = angular.module('cardApp', [
  'ngRoute',
  'cardAnimations',
  'cardControllers',
  'cardFilters',
  'cardServices'
]);

cardApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: './static/partials/card-list.html',
        controller: 'CardListCtrl'
      }).
      when('/:cardId', {
        templateUrl: './static/partials/card-detail.html',
        controller: 'CardDetailCtrl'
      }).
      otherwise({
        redirectTo: '/cards'
      });
  }]);

/*
var cashToInt = function(cash){
  for(i in cash){ (i == 0)? num = '' : num += cash[i]; }
  return parseInt(num);
}

*/