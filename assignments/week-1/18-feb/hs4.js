// 4. find the smallest element in marks array
let marks=[64,6483,75,32,93,20]
let smallest = marks[0]
let i 
for (i =1;i<marks.length;i++){
    if (marks[i] < smallest ){
        smallest = marks[i]
    }

}
console.log(`smallest element in the array is ${smallest}`)
