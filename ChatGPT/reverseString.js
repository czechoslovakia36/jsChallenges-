//Reverse a string 



function reverse(str){
    str_array= [...str]
    len=str_array.length
    new_array=[]
    
    while(len>0){
        element = str_array[len-1]
        new_array.push(element)
        len--
        
    }
    
 return new_array.join("")
    
}


// console.log(reverse("vivek"))

module.exports=reverse


