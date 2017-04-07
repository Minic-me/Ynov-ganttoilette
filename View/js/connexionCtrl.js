app.controller('connexionCtrl', ['$scope', '$http', function($scope, $http) {

    const serverName = ""

    $scope.Login = function() {
        var sign = $scope.sign;
        var user = {
            email: sign.email,
            password: sign.password
        };

        $http.get(serverName + "/user/login", {
                params: user
            })
            .then(function() {
                location.replace('/#!/Project');
            }, function(err) {

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
            .then(function() {
                $scope.sign.email = user.email;
                $scope.sign.password = user.password;
                $scope.Login();
            }, function(err) {

            });
    }



}]);
