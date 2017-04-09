app.controller('projectListCtrl', ['$scope', '$http', '$mdSidenav', function($scope, $http, $mdSidenav) {

    // menu burger
    $scope.toggleLeftMenu = function() {
        $mdSidenav('sidenav-left').toggle();
    }

    $scope.createProject = function() {
        $http.post('/project/createProject', {
                project: $scope.project
            })
            .then(function(data, status) {
                $scope.project = {}; // vide la liste de project
                $scope.getProjects();
                console.log('Project created');
            }, function(data, status) {
                alert(`Il y a eu une erreur: ${data}, avec le statut: ${status}`);
            });
    }

    $scope.getProjects = function() {
        $http.get('/project/getProjects')
            .then(function(res, status) {
                console.log('getProjects');
                $scope.liste = res.data;
            }, function(res, status) {
                alert(`Il y a eu une erreur: ${res}, avec le statut: ${status}`);
            })
    };

    $scope.deleteProject = function(index) {
        //$scope.liste = $scope.liste.filter((contact, i)=>{return (i!=index)});
        $http.delete(`/project/delete/${index}`)
            .then(function(res, status) {
                console.log('Project deleted');
                $scope.getContacts();
            }, function(res, status) {
                console.log(`Il y a eu une erreur: ${res}, avec le statut: ${status}`);
            });
    }
    $scope.showCreateForm = false;
    $scope.getProjects();
}]);
