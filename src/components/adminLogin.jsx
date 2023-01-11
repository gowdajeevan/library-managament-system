import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css'
const  AdminLogin=()=>{
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()
    let login = (e) =>{
        e.preventDefault();
        let data = {email,password}
        if(email=="admin@gmail.com" && password == 1234)
        {
            navigate('/admin/')
        }
        else{
            alert(`Invalid credentials`)
        }
    }
    return (
        <div className="adminlogin">
            <div className="admin_form">
                <h1 style={{color:"orangered"}}>Login As Admin</h1>
                <div className="form_input">
                    <form onSubmit={login}>
                        <div className="user_mail">
                        <label style={{fontSize:"large"}} htmlFor="">Email :</label>
                        <br />
                        <input type="emial" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
                        </div>
                        <div className="user_password">
                            <label style={{fontSize:"large"}} htmlFor="">Password :</label>
                            <br />
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
                        </div>
                        <button >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;