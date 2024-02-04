const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")


// input.addEventListener("input",e =>{
//     defaultText.textContent= e.target.value;
// })


input.addEventListener('input', e=> {


    setTimeout(()=>{
        defaultText.textContent=e.target.value
    },1000)

    
})

 function debounce(cb,delay=1000){
    
 }


