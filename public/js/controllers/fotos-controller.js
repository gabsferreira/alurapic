angular.module('alurapic').controller('FotosController', function($scope, $http) {
  $scope.fotos = [];
  $scope.filtro = '';


  //var promise = $http.get('/v1/fotos');
  //promise.then(function(retorno) {
  //  $scope.fotos = retorno.data;
  //})
  //.catch(function(erro) {
  //  console.log(erro);
  //});

 //omitindo a promise
  $http.get('/v1/fotos')
  .success(function(fotos) {
    $scope.fotos = fotos;
  })
  .error(function(erro) {
    console.log(erro);
  });
});