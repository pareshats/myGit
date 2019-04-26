import {browser,element,by} from "protractor"
import { Calculator } from "./pageObject/Calculator";

describe('Chain locators demo',async()=> {  


    it('Open Angular js website',async()=> {
        let cd= new Calculator
    browser.get('http://juliemr.github.io/protractor-demo/');
    //repeater ,  chain locators, And css for identical tags
    await cd.firstEditBox.sendKeys("5");
    await cd.secondEditbox.sendKeys("3");
    await cd.go.click();
    
  


    
    cd.getResult.getText().then(function(text)
    {
    
    console.log(text);
    })
    
    
    // element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    
    
    
    
    
    
    
    })
    
    })