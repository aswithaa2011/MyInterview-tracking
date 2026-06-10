import { useState } from "react"

const FetchAPI = () => {

   const [showdata,setshowData]=useState([])

   const [searchData, setSearchData]=useState("")

    const handleclick=async()=>{
        const response=await fetch("https://dummyjson.com/users")
       const data=await response.json()
        setshowData(data.users)

    }

    const handleSearch=(e)=>{
setSearchData(e.target.value)
    }


    const filteredData=showdata.filter((f)=>f.firstName.toLowerCase().includes(searchData.toLowerCase()))
  return (
    <>
    
    <button onClick={handleclick} className="bg-black text-white rounded-xl p-3 m-10">fetch users</button>

    <input type="search" placeholder="Search" onChange={handleSearch} className="border p-2" />

    <div>
        {
          filteredData.map((e)=>(
            <div key={e.id}>
                <h1>                {e.firstName}
                      </h1>
            </div>
          ))
        }
    </div>
    </>
  )
}

export default FetchAPI
