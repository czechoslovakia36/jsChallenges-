const removedDuplicate= (arr)=>{
  emptyArr=[]

  arr.forEach((el)=>{
    if(!(emptyArr.includes(el))){
        emptyArr.push(el)
    }
    
  })

  return emptyArr
}


module.exports= removedDuplicate;





// console.log(removedDuplicate([1,1,1,3,4]))

