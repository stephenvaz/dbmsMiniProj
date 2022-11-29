import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [logOrReg, setLog] = useState(true);
    // const [acctCreated, setAcct] = useState(false);
    const [loginSuccess, setLoginMess] = useState("");

    const register = () => {
        axios.post("http://localhost:6969/register", {name: name, username: userName, password: password}).then((response) => {
            console.log(response);
        });
    }

    const login = () => { 
        axios.post("http://localhost:6969/login", {username: userName, password: password}).then((response) => {
            // console.log(response.data);
        
                setLoginMess(response.data.message);
                
        });

    }

    // setLog("true");
    // useEffect(()=>{

    // })
        // console.log("login");
        return (logOrReg) ?(
        <div className="Login">
            <h1>Login</h1>
            <input type="text" placeholder="UserName" onChange={(e) => {
                setUserName(e.target.value);
            }}></input>
            
            <input type="password" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value)
            }}></input>
            
            <button onClick={() => {
                login();
            }}>Login</button>
            <button style={{marginLeft: "10px"}} onClick={ () =>{
                setLog(false)
                // console.log("register")
            }
            }>Register</button>
            <div>{loginSuccess}</div>
        </div>
    ): (
        
            <div className="Register">
                <h1>Register</h1>
                <input type="text" placeholder="Name" onChange={(e) => {
                setName(e.target.value);
            }}></input>
                <input type="text" placeholder="UserName" onChange={(e) => {
                setUserName(e.target.value);
            }}></input>
            
            <input type="password" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value)
            }}></input>
            

            <button  onClick={ () =>{
                // setLog(false)
                // console.log("register")
                register();
            }
            }>Register</button>
            
            <button style={{marginLeft: "10px"}} onClick={ () =>{
                setLog(true)
                // console.log("register")
            }} >Login</button>
            
            </div>
    );
// }
    
}





