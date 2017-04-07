app.controller('connexionCtrl', ['$scope', '$http', function($scope, $http) {

    const serverName = "https://gantt-kagomuffex.c9users.io"

    $scope.Login = function() {
        var sign = $scope.sign;
        var user = {
            email: sign.email,
            password: sign.password
        };

        $http.get(serverName + "/user/login", {
                params: user
            })
            .success(function(id) {
                sessionStorage.setItem("id", id);
            });
    }

    $scope.Register = function() {
        var sign = $scope.sign;
        var user = {
            name: sign.name,
            firstname: sign.firstName,
            email: sign.email,
            password: sign.password
        };

        $http.get(serverName + "/user/register", {
                params: user
            })
            .success(function(id) {
                sessionStorage.setItem("id", id);
            });
    }



}]);
