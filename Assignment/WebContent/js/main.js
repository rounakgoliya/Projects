var app = angular.module("MyApp",['ngRoute']);

app.run(function($rootScope){

	
	$rootScope.rootArray =  [{id:0,label:"Click",Xpos:0,Ypos:0,Time:0,freq:0,clickfreq:0}];


}); 

app.config(function($routeProvider){
	
	$routeProvider.when('/',{
								templateUrl:"html/welcome.html",
									controller:"welcome"
	                         })
	                .when('/view',{
					  
					  controller:"view",
					  templateUrl:"html/view.html"
				  })
				  
				  .otherwise({redirectTo : '/'});
	
	
});

