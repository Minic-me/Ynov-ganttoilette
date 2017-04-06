app.controller('signInCtrl', ['$scope', '$http', function($scope, $http) {

    const serverName = "https://gantt-kagomuffex.c9users.io"

    $scope.SignIn = function() {
        var sign = $scope.sign;
        let user = {
            email: sign.email,
            password: sign.password
        };

        $http.get(serverName + "/user/signIn", {
                params: user
            })
            .success(function(user) {


            });



    }













}]);
