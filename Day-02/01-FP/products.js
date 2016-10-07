var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 1},
	{id : 9, name : 'Hen', cost : 40, units : 60, category : 2},
	{id : 4, name : 'Den', cost : 80, units : 80, category : 1},
	{id : 3, name : 'Zen', cost : 70, units : 50, category : 2},
	{id : 8, name : 'Ten', cost : 20, units : 40, category : 1}
];

/*
sort
filter
all
any
countBy
min
max
sum
aggregate
each
transform
groupBy
*/
function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

describe('Default List', function(){
	console.table(products);
});

describe('Sorting', function(){
	describe('Default Sort [by id]', function(){
		function sort(){
			for(var i=0; i < products.length-1; i++)
				for(var j=i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
					
	});

	describe('Any list by any attribute', function(){
		function sort(list, attrName){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						/*var temp = list[i];
						list[i] = list[j];
						list[j] = temp;*/
						[list[i], list[j]] = [list[j], list[i]];
					}
		}
		describe('Products by cost', function(){
			sort(products, 'cost');
			console.table(products);
		});
		describe('Products by units', function(){
			sort(products, 'units');
			console.table(products);
		});
	});

	describe("Any list by any thing", function(){
		function sort(list, comparerFn){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0 ){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		var productComparerByValue = function(p1, p2){
			var p1Value = p1.cost * p1.units,
				p2Value = p2.cost * p2.units;
			if (p1Value < p2Value) return -1;
			if (p1Value === p2Value) return 0;
			return 1;
		}
		function byDescending(comparerFn){
			return function(){
				return comparerFn.apply(this, arguments) * -1;
			}
		}
		describe("Products by value [cost * units]", function(){
			
			sort(products, productComparerByValue);
			console.table(products);
		});
		describe("Products by value [cost * units][Descending]", function(){
			var productComparerByValueInDecending = byDescending(productComparerByValue); 
			sort(products, productComparerByValueInDecending);
			console.table(products);
		});
	});

});

describe('Filter', function(){
	describe("All category - 1 products", function(){
		function filterCategory1Products(){
			var result = [];
			for(var i=0; i < products.length; i++)
				if (products[i].category === 1)
					result.push(products[i]);
			return result;
		}
		var category1Products = filterCategory1Products();
		console.table(category1Products);
	});

	describe("Any list by any criteria", function(){
		function filter(list, criteriaFn){
			var result = [];
			for(var i=0; i < list.length; i++)
				if (criteriaFn(list[i]))
					result.push(list[i]);
			return result;
		}

		function negate(criteriaFn){
			return function(){
				return !criteriaFn.apply(this, arguments);
			}
		}
		var category1ProductCriteria = function(product){
			return product.category === 1;
		};

		describe("Categorty 1 products", function(){
			var category1Products = filter(products, category1ProductCriteria);
			console.table(category1Products);
		});
		/*var nonCategory1ProductCriteria = function(product){
			return !(category1ProductCriteria(product));
		};*/

		var nonCategory1ProductCriteria = negate(category1ProductCriteria);

		describe("Non Categorty 1 products", function(){
			var nonCategory1Products = filter(products, nonCategory1ProductCriteria);
			console.table(nonCategory1Products);
		});

		var costlyProductCriteria = function(product){
			return product.cost > 50;
		};

		describe("Costly Products [cost > 50]", function(){
			var cosltyProducts = filter(products, costlyProductCriteria);
			console.table(cosltyProducts);
		});

		/*var affordableProductCriteria = function(product){
			return product.cost <= 50;
		}*/
		/*var affordableProductCriteria = function(product){
			return !costlyProductCriteria(product);
		}*/
		var affordableProductCriteria = negate(costlyProductCriteria);

		describe("Affordable Products [cost <= 50]", function(){
			var affordableProducts = filter(products, affordableProductCriteria);
			console.table(affordableProducts);
		});
	})
});

describe("All", function(){
	function all(list, criteriaFn){
		for(var i=0; i < list.length; i++)
			if (!criteriaFn(list[i])) return false;
		return true;
	}
	console.log("Are all costly products ? ", all(products, function(product){
		return product.cost > 50;
	}));
})

describe("Any", function(){
	function any(list, criteriaFn){
		for(var i=0; i < list.length; i++)
			if (criteriaFn(list[i])) return true;
		return false;
	}
	console.log("Are there any costly products ? ", any(products, function(product){
		return product.cost > 50;
	}));
});

describe("Each", function(){
	function each(list, actionFn){
		for(var i=0; i<list.length; i++)
			actionFn(list[i]);
	}
	describe("Print names of products", function(){
		each(products, function(product){
			console.log(product.name);
		});
	});
});

describe("Transform", function(){
	function transform(list, transformFn){
		var result = [];
		for(var i=0; i<list.length; i++)
			result.push(transformFn(list[i]));
		return result;
	}
	describe("Products with 10% discount", function(){
		var discountedProducts = transform(products, function(product){
			/*return {
				id : product.id,
				name : product.name,
				units :product.units,
				cost : product.cost,
				discountedCost : product.cost * 0.9,
				category : product.category
			};*/
			let {id, name, units, cost, category } = product;
			return {id, name, units, cost, discountedCost : cost * 0.9, category};
		});
		console.table(discountedProducts);
	});
});

describe("GroupBy", function(){
	function printGroup(groupedItems){
		for(var key in groupedItems){
			describe("Key - " + key, function(){
				console.table(groupedItems[key]);
			});
		}
	}
	describe("Group Products by category", function(){
		function groupProductsByCagegory(){
			var result = {
				1 : [],
				2 : []
			};
			for(var i=0; i<products.length; i++){
				var category = products[i].category;
				result[category].push(products[i]);
			}
			return result;
		}
		var productsByCategory = groupProductsByCagegory();
		printGroup(productsByCategory);
	});

	describe("Group any list by any attribute", function(){
		function gruopBy(list, attrName){
			var result = {};
			for(var i=0; i<list.length; i++){
				var key = list[i][attrName];
				if (typeof result[key] === 'undefined')
					result[key] = [];
				result[key].push(list[i]);
			}
			return result;
		}
		var productsByCategory = gruopBy(products, "category");
		printGroup(productsByCategory);
	})

	describe("Group any list by any criteria", function(){
		function gruopBy(list, keySelectorFn){
			var result = {};
			for(var i=0; i<list.length; i++){
				var key = keySelectorFn(list[i]);
				/*if (typeof result[key] === 'undefined')
					result[key] = [];*/
				result[key] = result[key] || [];
				result[key].push(list[i]);
			}
			return result;
		}
		var productsByCost = gruopBy(products, function(product){
			return product.cost > 50 ? "costly" : "affordable";
		});
		printGroup(productsByCost);
	})
})




function debounce(fn, delay){
	var lastInvTime = null,
		result = null;
	return function(){
		if (!lastInvTime || (new Date() - lastInvTime) > delay){
			lastInvTime = new Date();
			result = fn.apply(this, arguments);
		}
		return result;
	}
}










