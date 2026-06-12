
// const employees = [ { id: 1, name: "John", salary: 25000 }, 
//     { id: 2, name: "David", salary: 45000 }, { id: 3, name: "Sam", salary: 60000 },
//      { id: 4, name: "Peter", salary: 30000 } ]; 


//     const fitereddata= employees.filter((f)=>f.salary>4000)

// fitereddata.forEach((e)=>{
//     console.log(e.name,e.salary);
    
// })

// const users = 
// [ { id: 1, name: "Sudhan" },
//      { id: 2, name: "Kumar" }, 
//      { id: 3, name: "Ravi" } ];

//      const findUsers=users.find((f)=>f.id===2)

//     console.log(findUsers.name,findUsers.id);
    

//       const cart = [ { product: "Laptop", price: 50000 }, { product: "Mouse", price: 500 }, { product: "Keyboard", price: 1500 } ]; 

//      const priceTotal= cart.reduce((acc,curvalue)=>{
//                 return acc+curvalue.price
//           },0)

//           console.log(priceTotal);


           const students = [ { id: 1, name: "Arun", mark: 85 }, 
            { id: 2, name: "Karthik", mark: 45 }, 
            { id: 3, name: "Vijay", mark: 92 },
             { id: 4, name: "Ajay", mark: 35 } ]


            const data=students.map((e)=> {return{
                  name: e.name,
                  id:e.id}
            })
            
            console.log(data);
            

            const filterData=students.filter((f)=>f.mark>=50)

            console.log(filterData);
            
            const findID=students.find((f)=>f.id==2)
            console.log(findID);
            

            const totalMark=students.reduce((acc,curvalue)=>{return acc+curvalue.mark},0)

            console.log(totalMark);
            
            const avgMark=students.reduce((acc,curvalue)=>{return (acc+curvalue.mark)},0)/students.length

            console.log(avgMark);
            
