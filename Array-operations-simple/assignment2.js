/*Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];
Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
    4. find() the course "react"
    5. findIndex() of "node" */
    const courses = ["javascript", "react", "node", "mongodb", "express"];
    const name=courses.filter(element=>element.length>5)
    console.log(name)
     const uppercase=courses.map(element=>element.toUpperCase())
    console.log(uppercase)
     const line=courses.reduce((acc,element)=>acc+"|"+element)
    console.log(line.toUpperCase())
  const find=courses.find(element=>element==="react")
    console.log(find)  
     const index=courses.findIndex(element=>element==="node")
    console.log(index) 