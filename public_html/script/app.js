var monAppli = angular.module('appTest', []);

monAppli.controller('appTestCtrl', [
    '$scope',
    function ($scope) {
        //init des proprietes
        $scope.monTest = "bonjour";
        $scope.user = {
            "firstname": "jules"
        };
        $scope.user.id = "42";
        $scope.user.name = "tringle";

        //methodes de notre controlleur
        $scope.majName = function () {
            $scope.user.name = "rien du tout";
        };
    }]);

monAppli.controller('blackBooks', ['$scope', '$http',
    function ($scope, $http) {
        $scope.books = [];
        $scope.copies = [];

        $scope.getBooks = function () {
            $http.get("http://www.black-books.uk/library/consulting/books")
                    .then(function (response) {
                        $scope.books = response.data;
                        $scope.th = response.data[0];
                    });
        };
        $scope.getBooksCopies = function () {
            $http.get("http://www.black-books.uk/library/consulting/books/"+ id +"/copies")
                    .then(function (response) {
                        $scope.copies = response.data;
     
                    });
        };
    }]);