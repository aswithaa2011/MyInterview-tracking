import { useState } from "react"

const EmployeeRegistration = () => {


    const [formData,setFormData]=useState({name:"",dept:"",salary:""})
    const [showData,setShowData]=useState([])

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})


    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setShowData([...showData,formData])
   setFormData({name:"",dept:"",salary:""})
    }

  
  return (
    <>

    <form onSubmit={handleSubmit}>

       <input
  type="text"
  name="name"
  value={formData.name}
  placeholder="Employee Name"
  className="border m-3 p-2"
  onChange={handleChange}
/>

<input
  type="text"
  name="dept"
  value={formData.dept}
  placeholder="Department"
  className="border m-3 p-2"
  onChange={handleChange}
/>

<input
  type="text"
  name="salary"
  value={formData.salary}
  placeholder="Salary"
  className="border m-3 p-2"
  onChange={handleChange}
/>

<button type="submit" className="bg-black text-white m-3 p-2 rounded-xl">Submit</button>
        
    </form>

    <div>
        {showData.map((e,i)=>(
  <div key={i}>

    <p>{e.name}</p> 
    <p>{e.dept}</p>
    <p>{e.salary}</p>
     </div>

        ))
        }
    </div>
    </>

    
  )
}

export default EmployeeRegistration
