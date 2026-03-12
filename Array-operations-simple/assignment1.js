/*Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28 */
    const temperatures = [32, 35, 28, 40, 38, 30, 42];
   const t=temperatures.filter(temp=>temp>35)
   console.log(t)
   const f=temperatures.map(temp=>(temp*1.8)+32)
   console.log(f)
   const avg=temperatures.reduce((accumulator,temp)=>(accumulator+temp))
   console.log(avg/7)
   const find=temperatures.find(temp=>temp>40)
   console.log(find)
   const index=temperatures.findIndex(temp=>temp===28)
   console.log(index)
   
   