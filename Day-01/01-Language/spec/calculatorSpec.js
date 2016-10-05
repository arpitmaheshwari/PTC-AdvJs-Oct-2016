describe("A Calculator", function(){
	it("Should be able to add two numbers", function(){
		//arrange
		var n1 = 10,
			n2 = 20,
			expectedResult = 30;

		//act
		var result = add(n1, n2);

		//assert
		expect(result).toBe(expectedResult);
	});
});