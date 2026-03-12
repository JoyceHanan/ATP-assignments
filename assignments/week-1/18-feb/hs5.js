
// 5. write a function that receives 3 numbers args and return the big number

function findBiggest(a,b,c){
    if(a>=b && a>=c){
        return a
    }
    else if (b >=a && b>=c)
        return b
    else
        return c
}
console.log(findBiggest(10,73,52))