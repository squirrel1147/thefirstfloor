(function(){
	var app = angular.module('desplay', []);
	var paintings=[
		{
			nameYear: "Blue Forest, 2016",
			chineseName: "藍森",
			description: "This is the description of Blue Forest.",
			src: "img/blueForest.jpg"
		}
	];

	app.controller('ShowController', function(){
		this.projects = paintings;
	});


})();