/*Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92 */
    const marks = [78, 92, 35, 88, 40, 67];
    const pass=marks.filter(ele=>ele>40)
    console.log(pass)
    const grace=marks.map(ele=>ele+5)
    console.log(grace)
    const high=marks.reduce((acc,ele)=>{
        if(acc<ele)
            return ele
        else 
            return acc
    })
    console.log(high)
    const first=marks.find(ele=>ele<40)
    console.log(first)
    const index=marks.findIndex(ele=>ele===92)
    console.log(index)