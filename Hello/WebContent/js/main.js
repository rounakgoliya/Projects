var app = angular.module("MyApp",['ngRoute']);

app.run(function($rootScope){

	

	$rootScope.rootCustomers =  [{id:1,fname:"Rounak",lname:"Goliya",city:"Jodhpur",contact:9414113620,email:"rounakgoliya92@gmail.com"}
	,{id:2,fname:"Jagdeesh",lname:"Kumar",city:"Nagpur",contact:9414127620,email:"kumarjagadesh@gmail.com"}
	,{id:3,fname:"Ishan",lname:"Parikh",city:"Udaipur",contact:9461334935,email:"parikhishan24@gmail.com"}
	,{id:4,fname:"Nikita",lname:"Mathur",city:"Udaipur",contact:9461312451,email:"nikitamathur17@gmail.com"}
	,{id:5,fname:"Pankaj",lname:"Bhagani",city:"Kolkata",contact:7413420620,email:"pankajbhagani19@gmail.com"}
	,{id:9,fname:"Rashmi",lname:"Ojha",city:"Pune",contact:8123654780,email:"rashmiojha24@gmail.com"}
	,{id:8,fname:"Saba",lname:"Kathawala",city:"Jaipur",contact:9462415361,email:"sabakathwala20@gmail.com"}
	,{id:7,fname:"Rinkesh",lname:"Purohit",city:"Banglore",contact:8062014620,email:"rinkeshpurohit14@gmail.com"}
	,{id:10,fname:"Jyoti",lname:"Agarwal",city:"Bharatpur",contact:9461888606,email:"jyotibtr@gmail.com"}
	,{id:6,fname:"Aditya",lname:"Jain",city:"Delhi",contact:9462831696,email:"adityajain19@gmail.com"}];

}); 
//var customers =[{id:1,fname:"Rounak",lname:"Goliya",city:"Jodhpur",contact:9414113620,email:"rounakgoliya92@gmail.com"}
//				,{id:2,fname:"Jagdeesh",lname:"Kumar",city:"nagpur",contact:9414127620,email:"kumar@gmail.com"}];

app.config(function($routeProvider){
	
	$routeProvider.when('/',{
								templateUrl:"html/welcome.html"
	                         })
				  .when('/register',{
					  
					  	controller:"register",
						templateUrl:"html/registerform.html"
					  
				  })
				  .when('/view',{
					  
					  controller:"view",
					  templateUrl:"html/view.html"
				  })
				  .when('/todolist',{
					  
					  controller:"todo",
					  templateUrl:"html/todolist.html"
				  })
				  .when('/addtocart',{
					  controller:"addtocart",
					  templateUrl:"html/addtocart.html"
				  })
				   .when('/addtocart/checkout',{
					  
					   controller:"checkout",
					  templateUrl:"html/checkout.html"
				  })
				  .when('/develop',{
					  
					  	//controller:"register",
						templateUrl:"html/develop.html"
					  
				  })
				  .when('/tutorial',{
					  
					   controller:"tutorial",
					  templateUrl:"html/tutorial.html"
				  })
				   .when('/tutorial/step01',{
							controller:"tutorial",
								templateUrl:"html/step01.html"
						  })
				  .when('/tutorial/step02',{
							controller:"tutorial",
								templateUrl:"html/step02.html"
						  })
				  .when('/tutorial/step03',{
							controller:"tutorial",
								templateUrl:"html/step03.html"
						  })
				  .when('/tutorial/step04',{
					controller:"tutorial",
						templateUrl:"html/step04.html"
				  })
				  .when('/tutorial/step05',{
					controller:"tutorial",
						templateUrl:"html/step05.html"
				  })
				  .when('/tutorial/step06',{
					controller:"tutorial",
						templateUrl:"html/step06.html"
				  })
				  .when('/tutorial/step07',{
					controller:"tutorial",
						templateUrl:"html/step07.html"
				  })
				  .when('/guide',{
					  
					   //controller:"checkout",
					  templateUrl:"html/checkout.html"
				  })
				  .when('/charts',{
					  
					   controller:"chart",
					  templateUrl:"html/chart.html"
				  })
				  .otherwise({redirectTo : '/'});
	
	
});

