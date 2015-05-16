hrApp.controller('MenuController', ['$scope', 'employeeActionsService','jobActionsService', function($scope, employeeActionsService ,jobActionsService){
    /*$scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];*/

    $scope.employeeActionList = employeeActionsService;
    $scope.jobActionList = jobActionsService;
    $scope.currentDate = new Date();

}]);
