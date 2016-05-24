
app.controller("register",function($scope,$rootScope){
	
	$scope.add = function() {
		$rootScope.rootCustomers.push($scope.user);
		
	};
});

app.controller("chart",function($scope,$rootScope){
	var options = {
		    chart: {
		        renderTo: 'container',
		        type: 'bar'
		    },
		    series: []
		};





	$scope.add=function(){
		options.series.push({
		    name: $scope.name,
		    data: [$scope.apple,$scope.banana,$scope.orange]
		});
		alert($scope.name);
		$(document).ready(function() {
			var chart = new Highcharts.Chart(options);
		});
			
	};

});


app.controller("view",function($scope,$rootScope){
	
	$scope.customers = $rootScope.rootCustomers;

});	


app.controller("addtocart",function($scope,$rootScope,$location){
	
	console.log("hello");
		
	
	
	    $scope.invoice = {
	        items: [{
	            qty: 1,
	            description: 'HP Pavilion g6',
	            cost: 799}]
	    };

	    $scope.addItem = function() {
	        $scope.invoice.items.push({
	            qty: 1,
	            description: '',
	            cost: 0
	        });
	    },

	    $scope.removeItem = function(index) {
	        $scope.invoice.items.splice(index, 1);
	    },

	    $scope.total = function() {
	        var total = 0;
	        angular.forEach($scope.invoice.items, function(item) {
	            total += item.qty * item.cost;
	        })

	        return total;
	    }
	
	    $scope.checkout = function() {
	       console.log("checkout");
	       $location.path("/addtocart/checkout");
	    }
	
});


app.controller("todo",function($scope,$rootScope){
	
	
		  $scope.todos = [];
		  $scope.markAll = false;
		    
		  $scope.addTodo = function() {
		      if(event.keyCode == 13 && $scope.todoText){
		          $scope.todos.push({text:$scope.todoText, done:false});
		          $scope.todoText = '';
		      }
		  };
		  $scope.isTodo = function(){
		      return $scope.todos.length > 0;  
		  }
		  $scope.toggleEditMode = function(){
		      $(event.target).closest('li').toggleClass('editing');
		  };
		  $scope.editOnEnter = function(todo){
		      if(event.keyCode == 13 && todo.text){
		          $scope.toggleEditMode();
		      }
		  };
		    
		  $scope.remaining = function() {
		    var count = 0;
		    angular.forEach($scope.todos, function(todo) {
		      count += todo.done ? 0 : 1;
		    });
		    return count;
		  };

		  $scope.hasDone = function() {
		      return ($scope.todos.length != $scope.remaining());
		  }    
		    
		  $scope.itemText = function() {
		      return ($scope.todos.length - $scope.remaining() > 1) ? "items" : "item";     
		  };
		      
		  $scope.toggleMarkAll = function() {
		      angular.forEach($scope.todos, function(todo) {
		        todo.done =$scope.markAll;
		      });
		  };
		  
		  $scope.clear = function() {
		    var oldTodos = $scope.todos;
		    $scope.todos = [];
		    angular.forEach(oldTodos, function(todo) {
		      if (!todo.done) $scope.todos.push(todo);
		    });
		  };
		    
		

});	



app.controller("checkout",function($scope,$rootScope){
	
	console.log("checkout hvbjh");

});	


app.controller("tutorial",function($scope,$rootScope){
	
	 $scope.templates = [{
	        name: 'Start Bootstrap',
	        url: '/tutorial/step01'},
	    {
	        name: 'Angular Expressions',
	        url: '/tutorial/step02'},
	        
	        {
		        name: 'Angular Modules',
		        url: '/tutorial/step03'},
		        
		     {
		       name: 'Angular Directives',
		       url: '/tutorial/step04'},
			        
		     {
		        name: 'Angular Controllers',
		        url: '/tutorial/step05'},
			        
	        {
		        name: 'Angular Scope',
		        url: '/tutorial/step06'},
		        
	        {
		        name: 'Angular Filters',
		        url: '/tutorial/step07'}
	        ];
	
});
