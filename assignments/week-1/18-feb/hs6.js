// 6.write a function that recives n array as arg nd return thier sum 

function sumArray (arr){
    let sum = 0;
    let i
    for (i =0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    return sum
}
console.log(sumArray([10,62,74,72,53]))