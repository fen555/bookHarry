/* global angular */
var eppingList = angular.module('root', [])
eppingList.controller('index', ['$scope', function ($scope) {
  $scope.book = [
    {name: "Harry Potter and the Philosopher's Stone", ep: 1, price: 100, img: 'img/1.jpeg'},
    {name: 'Harry Potter and the Chamber of Secrets', ep: 2, price: 100, img: 'img/2.jpeg'},
    {name: 'Harry Potter and the Prisoner of Azkaban', ep: 3, price: 100, img: 'img/3.jpeg'},
    {name: 'Harry Potter and the Goblet of Fire', ep: 4, price: 100, img: 'img/4.jpeg'},
    {name: 'Harry Potter and the Order of the Phoenix', ep: 5, price: 100, img: 'img/5.jpeg'},
    {name: 'Harry Potter and the Half-Blood Prince', ep: 6, price: 100, img: 'img/6.jpeg'},
    {name: 'Harry Potter and the Deathly Hallows', ep: 7, price: 100, img: 'img/7.jpeg'}
  ]
  $scope.list = []
  $scope.getTotal = function () {
    var total = 0
    for (var i = 0; i < $scope.list.length; i++) {
      total += ($scope.list[i].amount * 100)
    }
    return total
  }

  $scope.remove = function (item) {
    var index = $scope.list.indexOf(item)
    $scope.list.splice(index, 1)
  }

  $scope.clearAll = function (list) {
    var length = list.length
    list.splice(0, length)
  }
  $scope.addItem = function (ep, name) {
    if (check($scope.list, ep)) {
      var index = findArrBook($scope.list, ep)
      $scope.list[index].amount += 1
    } else {
      var data = {
        ep: ep,
        name: name,
        amount: 1
      }
      $scope.list.push(data)
    }
    console.log($scope.list)
    // console.log(ep, name)
  }
  var check = function (list, ep) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].ep === ep) {
        return true
      }
    }
  }
  var findArrBook = function (list, ep) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].ep === ep) {
        return i
      }
    }
  }
}])
