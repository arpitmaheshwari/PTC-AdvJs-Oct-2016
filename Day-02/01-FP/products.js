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
		function sort(){
			for(var i=0; i < products.length-1; i++)
				for(var j=i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		describe('Products by cost', function(){
			//sort
			console.table(products);
		});
	});
});