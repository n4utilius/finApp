'use strict';

/* Services */

var cardServices = angular.module('cardServices', ['ngResource']);

cardServices.factory('CardService', ['$resource',
  function($resource){
    return $resource('./static/cards/:cardId.json', {}, {
      query: {method:'GET', params:{cardId:'cards'}, isArray:true}
    });
  }]);
