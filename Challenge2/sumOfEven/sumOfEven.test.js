const sumOfEven = require('./sumOfEven');


test('sum of even square',()=> {
    expect(sumOfEven([1,2,3,4,5])).toBe(20);
    expect(sumOfEven([-1,0,1,2,3])).toBe(4);
    expect(sumOfEven([])).toBe(0);
}) 