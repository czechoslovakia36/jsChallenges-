function countOccurence(str,char){

    let count=0;
    str=str.toLowerCase()
    for(let ch of str){
       if(ch===char){
        count+=1
       }
    }
    return count
}

module.exports= countOccurence;