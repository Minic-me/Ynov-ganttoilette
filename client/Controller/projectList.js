var projectApp = angular.module('projectApp', ['projectMod']);

var projectMod = angular.module('projectMod', []);

projectApp.controller('projectListCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.createProject = function() {
        $http.post('/ganttoilette/createProject', {
                project: $scope.project
            })
            .then(function(data, status) {
                $scope.project = {}; // vide la liste de contact
                $scope.getProjects();
                console.log('Project created');
            }, function(data, status) {
                alert(`Il y a eu une erreur: ${data}, avec le statut: ${status}`);
            });
    }

    $scope.getProjects = function() {
        $http.get('/ganttoilette/getProjects')
            .then(function(res, status) {
                console.log('getProjects');
                $scope.liste = res.data;
            }, function(res, status) {
                alert(`Il y a eu une erreur: ${res}, avec le statut: ${status}`);
            })
    };

    $scope.deleteProject = function(index) {
        //$scope.liste = $scope.liste.filter((contact, i)=>{return (i!=index)});
        $http.delete(`/ganttoilette/delete/${index}`)
            .then(function(res, status) {
                console.log('Project deleted');
                $scope.getContacts();
            }, function(res, status) {
                console.log(`Il y a eu une erreur: ${res}, avec le statut: ${status}`);
            });
    }
    $scope.getProjects();
}]);
