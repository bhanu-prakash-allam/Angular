import { Calculator } from "./calculator"

describe("Testing function calc1 of Calculator", ()=>{

    it('Testing calc1 for negative values', ()=>{    
     
        let calc = new Calculator();
        let response = calc.calc1(-5);
       
        expect(response).toBe(0);
    })

    it('Testing calc1 for positive values', ()=>{
        let calc = new Calculator();
        let response = calc.calc1(5);
        expect(response).toBe(6);
    })
    it('Testing calc2 for squreroot values', ()=>{
        let calc = new Calculator();
        let response = calc.calc2(9);
        expect(response).toBe(3);
    })

})