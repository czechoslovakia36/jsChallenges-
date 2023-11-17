const countOccurence = require('./countOccurence');


test("Occurence of char in string",()=>{
    expect(countOccurence('aaaaaaaaaa','a')).toBe(10);
})