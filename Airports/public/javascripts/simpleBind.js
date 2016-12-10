var myController = function($scope){
    //controller code here
    $scope.myInput = "world!";
};
angular
    .module('myApp', [])
    .controller('myController', myController);