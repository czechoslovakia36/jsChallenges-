function countVowel(str){
    count=0;
    str=str.toLowerCase();
    // console.log(str)
    vowels=['a','e','i','o','u']
    Array.from(str).forEach(letter=> {
        // console.log(letter)
       if (vowels.includes(letter)){
        count++;
        //  console.log(letter)
       }
    })
    return count
    // console.log(count)

}

module.exports= countVowel;

// countVowel('aaAa');