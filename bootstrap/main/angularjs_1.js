angular.module("myApp",[])
.run(function($rootScope) {
	
}).controller("myControl",function($scope){
	$scope.app = {};
	$scope.app.containers = [{}];
	$scope.add = function(){
		$scope.app.containers.push({a:'2'});
	}
	$scope.del = function(index) {
		$scope.app.containers.splice(index,1);
	}
	$scope.arrTest = [];
	var quotas = [{cpu:"1"},{cpu:"2"}];
	for(var i=0;i<5;i++){
		$scope.arrTest[i] = angular.copy(quotas);
	}
	$scope.arrTest[1][0].cpu = "x";
	console.log($scope.arrTest);
})
