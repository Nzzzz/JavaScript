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
})
