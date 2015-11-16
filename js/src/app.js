
// CONFIG
// =======================================

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/views/intro.html',
			controller: 'mainCtrl'
		})
		.when('/how-to-play', {
			templateUrl: '/views/howtoplay.html',
			controller: 'mainCtrl'
		})
		.when('/game', {
			templateUrl: '/views/game.html',
			controller: 'gameCtrl'
		})
		.when('/result', {
			templateUrl: '/views/result.html',
			controller: 'mainCtrl'
		})
		.when('/win', {
			templateUrl: '/views/win.html',
			controller: 'mainCtrl'
		})
		.when('/signup', {
			templateUrl: '/views/signup.html',
			controller: 'mainCtrl'
		})
		.when('/thanks', {
			templateUrl: '/views/thanks.html',
			controller: 'mainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

});



// FACTORIES
// ===================================

app.factory('Images', [function(){
	
	// 1 = easy
	// 2 = medium
	// 3 = hard

	var images = {
		1: [
			{
				1: {
					x: '10%',
					y: '12%'
				},
				2: {
					x: '70%',
					y: '30%'
				},
				3: {
					x: '35%',
					y: '60%'
				},
				4: {
					x: '15%',
					y: '80%'
				},
				5: {
					x: '50%',
					y: '90%'
				}
			},
			{
				1: {
					x: '19%',
					y: '40%'
				},
				2: {
					x: '69%',
					y: '90%'
				},
				3: {
					x: '89%',
					y: '6%'
				},
				4: {
					x: '17%',
					y: '80%'
				},
				5: {
					x: '52%',
					y: '80%'
				}
			},
			{
				1: {
					x: '78%',
					y: '4%'
				},
				2: {
					x: '30%',
					y: '40%'
				},
				3: {
					x: '80%',
					y: '40%'
				},
				4: {
					x: '30%',
					y: '80%'
				},
				5: {
					x: '80%',
					y: '80%'
				}
			}
		],
		2: [
			{
				1: {
					x: '10%',
					y: '12%'
				},
				2: {
					x: '70%',
					y: '30%'
				},
				3: {
					x: '35%',
					y: '60%'
				},
				4: {
					x: '15%',
					y: '80%'
				}
			},
			{
				1: {
					x: '19%',
					y: '40%'
				},
				2: {
					x: '69%',
					y: '90%'
				},
				3: {
					x: '89%',
					y: '6%'
				},
				4: {
					x: '17%',
					y: '80%'
				}
			},
			{
				1: {
					x: '78%',
					y: '4%'
				},
				2: {
					x: '30%',
					y: '40%'
				},
				3: {
					x: '80%',
					y: '40%'
				},
				4: {
					x: '30%',
					y: '80%'
				}
			}

		],
		3: [
			{
				1: {
					x: '10%',
					y: '12%'
				},
				2: {
					x: '70%',
					y: '30%'
				}
			},
			{
				1: {
					x: '19%',
					y: '40%'
				},
				2: {
					x: '69%',
					y: '90%'
				}
			},
			{
				1: {
					x: '78%',
					y: '4%'
				},
				2: {
					x: '30%',
					y: '40%'
				}
			}

		]
	}

	return images;
}]);




// CONTROLLERS
// ===========================================

app.controller('mainCtrl', ['$scope', '$location', function($scope, $location) {

	$scope.leaveIntro = function(){
		$location.url('/how-to-play');
	}

	$scope.startGame = function(){
		$location.url('/game');
	}

}]);

app.controller('gameCtrl', ['$scope', '$location', 'Images', function($scope, $location, Images) {

	// Initialize image

	var round = 1;
	var totalRounds = 3;
	var images;
	$scope.game = {};

	var getRoundImages = function(roundNum) {
		return Images[roundNum];
	}
	var pickImage = function(imageArray) {
		var range = imageArray.length;
		var index = Math.floor(Math.random() * range);

		return imageArray[index];
		// returns object with hotspot coordinates
	}

	var initImage = function() {
		images = getRoundImages(round);
		$scope.game.currentImg =  pickImage(images);
	}

	initImage();


	// Gameplay



	// Game Progression

}]);