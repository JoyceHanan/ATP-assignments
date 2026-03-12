/*Test Data :
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard" */
    const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
const stock=cart.filter(el=>el.inStock="true")
console.log(stock)
const newarr=cart.map(el=>{
return{
    name:el.name,
    totalPrice:el.price*el.quantity
};
})
console.log(newarr)
const total=cart.reduce((acc,el)=>acc+el.price,0)
console.log(total)
  const find=cart.find(el=>el.name==="Mouse")
    console.log(find)  
     const index=cart.findIndex(el=>el.name==="Keyboard")
    console.log(index)