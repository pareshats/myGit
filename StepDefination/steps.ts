import { Given,When,Then } from "cucumber";
import { async } from "q";
import {Calculator} from "../pageObject/Calculator"
import { browser } from "protractor";
import chai from "chai";
var expect = chai.expect;
let cd= new Calculator
Given('Navigate to Calculator webSite',  async()=> {
    // Write code here that turns the phrase above into concrete actions
   await browser.get('http://juliemr.github.io/protractor-demo/');
    
  });
  
  When('I Add two Numbers {string} And {string}',  async(string, string2)=> {
    
    await cd.firstEditBox.sendKeys(string);
    await cd.secondEditbox.sendKeys(string2);
  });

  Then('Output Display Shuold Be {string}',async (string)=>{
    // Write code here that turns the phrase above into concrete actions
    await cd.go.click();
    await cd.getResult.getText().then(function(text){
        expect(text).to.equal(string);
        
    })
  }); 