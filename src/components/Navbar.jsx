import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {

    const [active, setActive] = useState("modal")
    const [article, setArticle] = useState("modal")
    const [menu, setMenu] = useState("menu-rest")  


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
                        <Link to="/products">Products</Link>
                    </li>
                    
                </ul>
                </div>
                <div className='paragraph2'>
                    
                    <button onClick={() => setActive("active")}>Sign in</button>
                    <button onClick={() => setArticle("signup2")}>Sign up </button>
                    <button >Theme</button>
                </div>    
                <img src="https://cdn-icons-png.flaticon.com/512/9710/9710841.png" className='menu' onMouseMove={()=>{ setMenu("menu-break")}}/>            
            </div>
        </nav>

        <div className={menu}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
            <img src="https://www.freeiconspng.com/thumbs/x-png/x-png-15.png" onClick={()=> setMenu("menu-rest")} style={{height:"30px"}}/>
        </div>

        <span className={active}>
            <div className="box">
                <img src="https://pngfre.com/wp-content/uploads/X-1.png" onClick={()=> setActive("modal")}/>
                <div className="mini-box">
                <h6>We happy to see you again</h6>
                <div>
                    <p>Your email:</p>
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div>
                    <p>Your password:</p>
                    <input type="password" placeholder='Enter your password'/>
                </div>
                <button className='login-btn'>Log in</button>
                </div>
            </div>
        </span>
        <span className={article}>
            <div className="box2">
                <img src="https://pngfre.com/wp-content/uploads/X-1.png" onClick={()=> setArticle("modal")}/>
                <div className="mini-box">
                <h6>Create account</h6>
                <div>
                    <p>Type your email:</p>
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div>
                    <p>Create password:</p>
                    <input type="password" placeholder='Enter your password'/>
                </div>
                <div>
                    <p>Repeat password:</p>
                    <input type="password" placeholder='Enter your password'/>
                </div>
                <button className='login-btn'>Create</button>
                </div>
            </div>
        </span>
    </div>
  )
}

export default Navbar