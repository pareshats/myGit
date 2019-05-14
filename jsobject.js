function objDemo(){
	
	this.firstInput=element(by.model("first"));
	this.secondInput=element(by.model("second"));
	this.gobutton=element(by.id("gobutton"));
	
	this.geturl=function()
	{
		browser.get('http://juliemr.github.io/protractor-demo/');
	};
	
}
module.exports=new objDemo();