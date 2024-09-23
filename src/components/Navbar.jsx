import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import axios from 'axios'
import { json } from 'react-router-dom'

function Navbar() {

    const [active, setActive] = useState("modal")
    const [article, setArticle] = useState("modal")
    const [menu, setMenu] = useState("menu-rest")  

    const[signin, signin2] = useState("")
    const[signup, signup2] = useState("")

    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const HandleReg = (e)=>{
        if(ValidReg()){
        e.preventDefault();
        let configurate = {email,userName,password}
        
        fetch("https://66dc439047d749b72acb2409.mockapi.io/users",{
            method:"POST", headers:{"content-type":"application/json"},body:JSON.stringify(configurate)
        })
        .then((res)=>{
            alert("You was Registered Successfully")
            window.location.pathname ="/"
        })
        .catch((err)=>{
            alert("Failed:   " +err.message)
        })}
    }
    const ValidReg = () =>{
        let massa = true;
        let errMess = "Please Enter the value in: "
        if(email === null || email==""){
            massa=false;
            errMess += "Email"
        }
        if(userName === null || userName==""){
            massa=false;
            errMess += "UserName"
        }
        if(password === null || password==""){
            massa=false;
            errMess += "Password"
        }
        if(!massa){
            alert(errMess)
        }
        else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }
            else{
                massa = false;
                alert("Enter Valid Info")
            }
        }
        return massa;
    }

    const [userTitle, setUserTitle] = useState("");
    const [parole, setParole] = useState("")

    const HandelLogin = (e)=>{
        if(ValidLog()){
                    e.preventDefault()

            fetch("https://66dc439047d749b72acb2409.mockapi.io/users")
            .then((res)=>{
                return res.json();
            })
            .then((respo)=>{
                if(Object.keys(respo).length === 0){
                    alert("Enter Valid User-Name")
                }
                else{
                    if(respo.password == password){
                        window.location.pathname = "/"
                        alert("success")
                        sessionStorage.setItem("username", userName);

                    }
                    else{
                        alert("Please Enter Valid Parole")
                    }
                }
            })
            .catch((err)=>{
                alert("Login Failed Because: "+ err.message )
            })
        }
    }

    const ValidLog = ()=>{
        let result = true;
        if(userTitle == ""|| userTitle=== null){
            result = false
            alert("Please Enter User-Name")
        }
        if(parole == "" || parole === null){
            result = false
            alert("Please Enter Password")
        }

        return result;
    }

    const [confirm, confirm2] = useState("latin")
    
    

  return (
    <div>
        <nav>
            <div className="container">
                <div className='paragraph1'>
                <img src="https://www.califesciences.org/wp-content/uploads/2021/10/brex.png"/>
                <img src="https://glances.com/_next/image?url=%2Fimg%2Fapps%2Fpng%2Fbrex.png&w=3840&q=75" className='logo-crocodile'/>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/clients">Customers</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    
                    
                </ul>
                </div>
                <div className='paragraph2'>
                    
                    <button onClick={() => setActive("active")}  className={signin}>Sign in</button>
                    <button onClick={() => setArticle("signup2")} className={signup}>Sign up </button>
                    <button onClick={() => sessionStorage.clear()}>Log-out</button>
                </div>    
                <img src="https://cdn-icons-png.flaticon.com/512/9710/9710841.png" className='menu' onMouseMove={()=>{ setMenu("menu-break")}}/>            
            </div>
        </nav>

        <div className={menu}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/clients">Customers</Link></li>
            </ul>
            <img src="https://www.freeiconspng.com/thumbs/x-png/x-png-15.png" onClick={()=> setMenu("menu-rest")} style={{height:"30px"}}/>
        </div>

        <span className={active}>
            <form className="box" onSubmit={HandelLogin}>
                <img src="https://pngfre.com/wp-content/uploads/X-1.png" style={{cursor:"pointer"}} onClick={()=> setActive("modal")}/>
                <div className="mini-box">
                <h6>Log-in</h6>
                <div>
                    <p>Your Username:</p>
                    <input value={userTitle} onChange={e=>setUserTitle(e.target.value)} type="text" placeholder='Enter your username'/>
                </div>
                <div>
                    <p>Your password:</p>
                    <input value={parole}  onChange={e=>setParole(e.target.value)} type="password" placeholder='Enter your password'/>
                </div>
                <button className='login-btn'>Log in</button><br />
                <a style={{color:"orange"}}>Not a member? </a><a style={{color:"aliceblue", cursor:"pointer"}}  onClick={() => setArticle("signup2", setActive("modal"))}>Sign Up Now</a>
                </div>
            </form>
        </span>
        <span className={article}>
            <form className="box2" onSubmit={HandleReg}>
                <img src="https://pngfre.com/wp-content/uploads/X-1.png" style={{cursor:"pointer"}}  onClick={()=> setArticle("modal")}/>
                <div className="mini-box">
                <h6>Create account</h6>
                <div>
                    <p>Type email:</p>
                    <input value={email} onChange={e=> setEmail(e.target.value)} type="email" placeholder='Enter email'  />
                </div>
                <div>
                    <p>Username:</p>
                    <input value={userName} onChange={e=> setUserName(e.target.value)}  type="text" placeholder='Enter username'/>
                </div>
                <div>
                    <p>Create password:</p>
                    <input  value={password} onChange={e=> setPassword(e.target.value)}  type="password" placeholder='Enter password'/>
                </div>
                <button className='login-btn'>Create</button>
                <a style={{color:"orange"}}>Already have account? </a><a style={{color:"aliceblue", cursor:"pointer"}}  onClick={() => setActive("active", setArticle("modal"))} >Sign in</a>
                </div>
            </form>
        </span>
        <div className={confirm}>
            <div className="cont-rep">
                <h1 style={{color:"white"}}>Do you want to buy</h1>
                <div>
                <button>Confirm</button>
                <button>Cancel</button>
                </div>
            </div>
         </div>
    </div>

  )
}

export default Navbar