const isPalindrome = require('./palindrome');

// const result1= isPalindrome('racecar &**&*');
// const result2= isPalindrome('racecars');
// console.log(result1,result2);

test('Checking for palindrome string',()=>{
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('racecard')).toBe(false);
    // expect(isPalindrome('A man,a plan,a canal,Panama')).toBe(true);
    expect(isPalindrome('12321')).toBe(true);
})

