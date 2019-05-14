var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config={
		directConnect: true,
		specs:['element.js'],
		
		onPrepare :function()
		{
			browser.driver.manage().window().maximize();
			jasmine.getEnv().addReporter(
					new jasmine2HtmlReporter({
						savePath: 'target/screenshots'
					})
					);
		}
};