/**
 * 
 */
describe('element of Protarctor',function(){
	
	var obj =require("./jsobject.js");
	var d =require("./data.js");
	var using= require('jasmine-data-provider');
	
	beforeEach(function(){
		obj.geturl();
	});
	using(d.datadriven, function (data, description)
			{
		it('locators'+description,function(){
			
			
			
			
			obj.firstInput.sendKeys(data.firstInput);
			obj.secondInput.sendKeys(data.secondInput);
			
			obj.gobutton.click();
			browser.sleep(5000);
			
			console.log("Hello");
			
			
		})
			})
	
	afterEach(function(){
		console.log("Test is Completed----->")
	});
	
})
