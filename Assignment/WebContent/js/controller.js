

app.controller("welcome",function($scope,$rootScope, $filter){
	
	$scope.addOnClick = function(event) {
		
       console.log($scope.count);
       $scope.hhmmsstt = new Date().getTime();
       $scope.diff = ($scope.hhmmsstt -  $rootScope.rootArray[$scope.count-1].Time)/10;
       $scope.clickfreq = $scope.diff /  $scope.count;
       
       console.log($scope.clickfreq);
       $rootScope.rootArray.push({id:$scope.count,label:"Click",Xpos:event.offsetX,Ypos:event.offsetY,Time:$scope.hhmmsstt,freq:$scope.diff,clickfreq:$scope.clickfreq});
       
}
});

app.controller("view",function($scope,$rootScope){
	
	$scope.Array = $rootScope.rootArray;
	
	var options = {
		    chart: {
		        renderTo: 'container',
		        	type: 'bar'
		    },
		    xAxis: {
	            categories: []
	        },
	        series: [{
	            data: [],
	            step: 'right',
	            name: 'Right'
	        }]
		};
	for(var i=2;i<$scope.Array.length;i++){
		options.xAxis.categories.push($scope.Array[i].freq);
		options.series[0].data.push(i);
	}
		
		//alert($scope.name);
		$(document).ready(function() {
			var chart = new Highcharts.Chart(options);
		});
			


});	
