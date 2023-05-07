
angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController); 

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.checkLunchItems = function(){
            var lunchItems = $scope.lunchItems;
            console.log(lunchItems.split(','));
            var lunchItemsArray = lunchItems.split(',');
            var lunchItemsCount = lunchItemsArray.length;

            if(lunchItems === "" || lunchItemsCount === 0){
                $scope.message = "Please enter data first";
                
            }else if(lunchItemsCount > 3){
                $scope.message = "Too much!";
               
            }else if(lunchItemsCount <= 3 && lunchItemsCount > 0 ){
                $scope.message = "Enjoy!";
                
            }
        }
    }

