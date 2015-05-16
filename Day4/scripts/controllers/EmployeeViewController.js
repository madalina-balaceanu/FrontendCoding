hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'employeeService','commonResourcesFactory',
    function($scope, $http, $routeParams, $location, employeeService,commonResourcesFactory) {

    /*    $scope.employee = {
            "id": 100,
            "firstName": "Steven",
            "lastName": "King",
            "email": "SKING",
            "phoneNumber": "515.123.4567",
            "hireDate": "1987-06-17",
            "jobId": 1,
            "salary": 24000.00,
            "commissionPct": null,
            "managerId": null,
            "departmentId": 90
        };*/


        // TODO get employee by id
        $http({url: commonResourcesFactory.findOneEmployeeUrl+$routeParams.employeeid, method: 'GET'}).
            success(function (data) {
                $scope.employee = data;
            });

        // TODO back to Employee List page
        $scope.back = function() {
            $location.url('/employeeslist');
        }

    }]);