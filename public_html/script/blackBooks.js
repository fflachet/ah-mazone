var monAppli = angular.module('library', []);

monAppli.controller('blackBooks', ['$scope', '$http',
    function ($scope, $http) {
        $scope.books = [];
        $scope.th = null;
        $scope.showBooks = false;
        $scope.showCopies = false;

        $scope.getBooks = function () {
            $http.get("http://www.black-books.uk/library/consulting/books")
                    .then(function (response) {
                        $scope.books = response.data;
                        $scope.th = response.data[0];
                        $scope.showBooks = true;
                        $scope.showCopies = false;
                    });
        };

        $scope.copies = {};

        $scope.getBooksCopies = function (id) {
            $http.get("http://www.black-books.uk/library/consulting/books/" + id + "/copies")
                    .then(function (response) {
                        $scope.copies = response.data;
                        $scope.th = response.data[0];
                        $scope.showBooks = false;
                        $scope.showCopies = true;
                    });
        };
    }]);

