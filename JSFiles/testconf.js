"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Calculator_1 = require("./pageObject/Calculator");
describe('Chain locators demo', () => __awaiter(this, void 0, void 0, function* () {
    it('Open Angular js website', () => __awaiter(this, void 0, void 0, function* () {
        let cd = new Calculator_1.Calculator;
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        yield cd.firstEditBox.sendKeys("5");
        yield cd.secondEditbox.sendKeys("3");
        yield cd.go.click();
        cd.getResult.getText().then(function (text) {
            console.log(text);
        });
        // element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGNvbmYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0Y29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQTZDO0FBQzdDLHdEQUFxRDtBQUVyRCxRQUFRLENBQUMscUJBQXFCLEVBQUMsR0FBTyxFQUFFO0lBR3BDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQyxHQUFPLEVBQUU7UUFDbEMsSUFBSSxFQUFFLEdBQUUsSUFBSSx1QkFBVSxDQUFBO1FBQzFCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDekQsd0RBQXdEO1FBQ3hELE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFNcEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBR3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7UUFHRixnRkFBZ0Y7SUFRaEYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==