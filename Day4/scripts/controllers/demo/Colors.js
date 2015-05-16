hrApp.controller('Colors', ['$scope', function ($scope) {

    //TODO #1
       $scope.colors=[{
           "text": "mutex",
           "class":"text-mutex"
            },
           {
               "text": "primary",
               "class":"text-primary"
           },
           {
               "text": "succes",
               "class":"text-succes"
           },
           {
               "text": "info",
               "class":"text-info"
           },
           {
               "text": "warning",
               "class":"text-warning"
           },
           {
               "text": "danger",
               "class":"text-danger"
           }
       ];
    $scope.changeColor = function() {
        //TODO #3
        $scope.myClass = $scope.myColor.class;

    }
    $scope.searchText;
    $scope.orderByText;
}]);