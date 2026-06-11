import { useEffect, useState } from "react";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);
  const[loading,setloading]=useState(true)
  const [error,seterror]=useState("")

  const fetchAPIdata = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      setUsers(data);

      if(!data){
        setloading(true)
      }
    } catch (err) {
        seterror(err.message)
      console.error("Error fetching data:", err);
    }
    finally{
        setloading(false)
    }
}
  useEffect(() => {
    (async()=>{
       fetchAPIdata()
    })();
  }, []);

  return (
<>
   {loading && <p>loading...</p>}
      {error && <p>{error}...</p>}

      {!loading && !error &&  users.map((e)=>(
        <div key={e.id}>
        
        <p>{e.name}</p>
                <p>{e.company.ame}</p>
                        <p>{e.email}</p>


        </div>
       
      ))}

   


</>   

  );
};

export default FetchAPI;