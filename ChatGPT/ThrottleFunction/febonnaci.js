const febo = (n)=>{

    do{
            if(n==0){
                return 0
            }
            else if (n==1){
                return 1
            }

            else {
                return febo(n-1)+febo(n-2);
            }

            n--
    }
    while(n>0)

}


console.log(febo(4))

/*


f(n)={
    0 , if n=0
    1, if n=1
    f(n) = f(n-1)+f(n-2)
}

f(3)
f(3) = f(2)+f(1)= f(1)+f(0)+f(1)=1+0+1=2 

*/

