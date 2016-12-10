var tempConverterController = function($scope){
    //controller code here
    $scope.conversionResult = 0;
    console.log($scope.cSelected);
    
    $scope.setCSelected = function(){
        $scope.cSelected = true;
        $scope.fSelected = false;
        console.log("C is: " + $scope.cSelected);
    };

    $scope.setFSelected = function(){
        $scope.fSelected = true;
        $scope.cSelected = false;
        console.log("F is: " + $scope.fSelected);
    };
    
    $scope.doConversion = function(){
        if($scope.cSelected){
            alert("Here in C to F");
            $scope.conversionResult = parseInt($scope.tempInput) * 9/5 + 32;
        }
        if($scope.fSelected){
            alert("Here in F to C");
            $scope.conversionResult = parseInt($scope.tempInput) - 32 * 5/9;
        }        
    };
};
angular
    .module('tempConverter', [])
    .controller('tempConverterController', tempConverterController);