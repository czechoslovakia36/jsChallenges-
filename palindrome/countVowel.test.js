const countVowel= require('./countVowel');


test('Count number of vowels', () => { 
    expect(countVowel('aaa')).toBe(3);
 })