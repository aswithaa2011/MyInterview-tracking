 const frontend = ["HTML", "CSS", "JavaScript"]; 
 const backend = ["Node.js", "MongoDB"]


 const fullstack = [...frontend, ...backend];
 console.log(fullstack);
 



 const totalMarks=(name,...marks)=>{
 
    let total=0

    for(let i=0;i<marks.length;i++){
        total+=marks[i]
    }
  return `${name}: ${total}`;



 }

 console.log(totalMarks("aswi",20,89,89));
 console.log(totalMarks("john",100,200));
 
//  const name = "Ravi"; const role = "MERN Developer"; const company = "Infosys"; 

//  console.log(`Name: ${name}, Role: ${role}, Company: ${company}`);
 

//  const student = { name: "Arun", course: "MERN", city: "Chennai" }; 

// const {name1, course, city}=student

// console.log(name1);


const [one,second, ...balance] = [10, 20, 30, 40];

console.log(one);
console.log(second);

console.log(balance);

 const { name, ...others } = {
  name: "Sam",
  age: 25,
  city: "Chennai"
  , gender:"f"
};

console.log(name);
console.log(others);