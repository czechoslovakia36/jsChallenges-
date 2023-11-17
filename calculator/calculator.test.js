const calculator= require('./calculator');

const result= calculator(1,2,'+');


test('Performing arithmetic operation using the calculator function ',()=>{
    // Test case inputs
    const num1=5;
    const num2=7;
    

    // Addition 
    expect(calculator(num1,num2,'+')).toBe(12);
    // subtraction 
    expect(calculator(num1,num2,'-')).toBe(-2);
    // multiply
    expect(calculator(num1,num2,"*")).toBe(35);
    // division 
    expect(calculator(num1,num2,'/')).toBeCloseTo(0.7143)
})