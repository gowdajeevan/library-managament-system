import { useEffect, useState } from "react";
import '../styles/userlist.css'
const UserList = () => {
    let [user,setUser]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch("http://localhost:2000/users")
            let data=await response.json()
            setUser(data)
            console.log(data);
        }
        fetchData()
    },[] )
    let handleRemove=(id,name)=>{
        setUser(user.filter(x=>x.id!==id) )
        alert(`${name} has been removed`)
    }
    return ( 
        <div className="userList">
            <h1 id="ul">User Lists: {user.length} </h1>
                <div className="user_section">
                    {user.map( data=>(
                        <div className="user">
                        <div className="middle_border">
                        <p style={{textAlign:"center",paddingBottom:"10px" ,fontSize:"xx-large", borderBottom:"2px solid orange"}}>{data.name}</p>
                        <p>ID : {data.id} </p>
                        <p>Age : {data.age}</p>
                        <p>PhoneNumber : {data.phone}</p>
                        <p>Email : {data.email}</p>
                        <button onClick={()=>handleRemove(data.id,data.name)}>Remove</button>
                        </div>
                        </div>
                    ) )}
                </div>
        </div>
     );
}
 
export default UserList;