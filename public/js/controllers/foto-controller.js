angular.module('alurapic')
.controller('FotoController', function($scope, $http) {
    $scope.submeter = function() {
        if($scope.formulario.$valid) {
            $http.post('v1/fotos', $scope.foto)
            .success(function() {
                $scope.mensagem = 'Foto cadastrada com sucesso';
            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possivel cadastrar foto';  
            });  
        }
    };
})