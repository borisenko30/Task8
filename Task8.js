angular.module('myApp', [])
	.controller('goodsController', function ($scope) {
		$scope.visible = true;
		$scope.goods = [{name: 'potato', price: 3.5}, {name: 'rice', price: 4.21}, 
						{name: 'milk', price: 6.35}, {name: 'cabbage', price: 2.70}, {name: 'apple', price: 8.03}];
		$scope.addItem = function (event) {
			if (event.which === 13 && $scope.text) {
				$scope.goods.push({ name: $scope.text, price: (Math.random()*10).toFixed(2)});
				$scope.text = '';
			};
		};
		$scope.deleteItem = function(index) {
			$scope.goods.splice(index, 1);
		};

	})
	.controller('buyersController', function ($scope) {
		$scope.visible = true;
		$scope.buyers = [{name: 'Ivan', age: 50, city: 'Lviv', ava: 'cat3.jpg'},
						 {name: 'Mariya', age: 33, city: 'Kyiv', ava: 'cat4.jpg'},
						 {name: 'John', age: 99, city: 'Sidney', ava: 'cat2.jpg'}];
		$scope.city = ['Kyiv', 'Lviv', 'Donetsk', 'Dnipropetrovsk', 'Odesa'];
		$scope.addItem = function (event) {
			var rndAge,
				rndAva,
				rndCity;
			
			if (event.which === 13 && $scope.text) {
				rndAge = Math.floor(Math.random()*60)+18;
				rndAva = 'cat' + (Math.ceil(Math.random()*4)) + '.jpg';
				rndCity = Math.floor(Math.random()*5);

				$scope.buyers.push({ name: $scope.text, age: rndAge, city: $scope.city[rndCity], ava: rndAva});
				$scope.text = '';
			};
		};
		$scope.deleteItem = function(index) {
			$scope.buyers.splice(index, 1);
		};

	});