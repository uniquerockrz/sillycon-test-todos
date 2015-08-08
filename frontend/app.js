var api = 'http://localhost:5000/web';

var silly101 = angular.module('Silly101', []);

silly101.controller('TodosController', function ($scope, $http) {

	$scope.name = "Todos";

	$scope.todos = [];

	$http.get(api+'/todos').then(function (res) {
		console.log(res.data);

		$scope.todos = res.data.todos;

	}, function(err){
		console.log(err);
	});

	$scope.addTodo = function(){
		$http.post(api+'/todos', {name: $scope.todoName}).then(function (res) {
			console.log(res.data);

			if(res.data.success = true){
				$scope.todos.push({
					name: $scope.todoName,
					done: false
				});

				$scope.todoName = '';
			}
		}, function(err){
			console.log(err);
		});
	};

});