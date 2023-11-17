const getSum= require('./getSum');

test("Sum is correct",()=>{
    const result= getSum(1,2,3);
    expect(result).toBe(6);
})