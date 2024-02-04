const febonnaci = (n)=>{

    const arr = [0,1]

    for(let i=2; i<n;i++){
        nextNumber= arr[i-1]+arr[i-2]
        arr.push(nextNumber)
    }

    return arr

}


console.log(febonnaci(3))




/*


0 1 -->1 --> 2


*/