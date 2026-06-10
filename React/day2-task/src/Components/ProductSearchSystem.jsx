import { useState } from "react";


const ProductSearchSystem = () => {
 
    const [search,setSearch]=useState("")

    const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 65000,
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 25000,
  },
  {
    id: 3,
    name: "Headphones",
    category: "Accessories",
    price: 3000,
  },
  {
    id: 4,
    name: "Office Chair",
    category: "Furniture",
    price: 8500,
  },
  {
    id: 5,
    name: "Backpack",
    category: "Bags",
    price: 1500,
  },
];

const filteredData=products.filter((f)=>f.name.toLowerCase().includes(search.toLowerCase()))
  return (
   <>


    




     
   

   <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded m-5 w-full max-w-md"
      />

      {filteredData.length>0?(     <div className="flex m-5 gap-4 ">
      {filteredData.map((e) => (
        <div key={e.id}  className="flex flex-col  border p-2">
          <h3>{e.name}</h3>
          <p>Category: {e.category}</p>
          <p>Price: ₹{e.price}</p>
        </div>
      ))} 
 </div>):(<p className="text-red-600 font-bold text-2xl">No products found</p>)}

   </>
  )
}

export default ProductSearchSystem
