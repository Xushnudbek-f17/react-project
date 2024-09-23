import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import 'animate.css';
import { useState } from 'react';


function Home() {


const [active, setActive] = useState("modal")
const [article, setArticle] = useState("modal")

function alterPath(){
    window.location.pathname="/products"
}


  return (
    <div className='Home animate__animated   animate__fadeIn' >
           <img src="https://www.mastercard.com/news/media/5u1hhu0q/brex-card-2.png" className='letimg'/>
        <div className="passages">
            <div className="passage-texts animate__animated animate__fadeInLeft">
            <h1>Make every dollar count</h1>
            <p>Brex is a financial technology company, not a bank. Checking and banking services provided by</p> <p>Column N.A., Member FDIC.</p><br /><br />
            <div>
            <button onClick={() => setActive("active")} >Get started</button>
            <button onClick={alterPath}>Go to Products Page</button>
            </div>
            </div>
        </div>


          <div className='logos'>
              <div className="logo-slider">
                <a href="https://www.doordash.com/" target='blank' ><img src="https://freepnglogo.com/images/all_img/1725385918doordash-logo.png"/></a>
                <a href="https://scale.com/" target='blank' ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scale_AI.svg/640px-Scale_AI.svg.png"/></a>
                <a href="https://www.airtable.com/" target='blank' ><img src="https://brand.brex.com/transform/dad32602-5429-423d-8309-36e692d5b7b7/Airtable?io=transform:fit,width:230,height:50&quality=95"/></a>
                <a href="https://www.whatnot.com/" target='blank' ><img src="https://miro.medium.com/v2/resize:fit:1400/1*iJ0_tQFw0y-AhyjM9rqoPQ.png"/></a>
                <a href="https://classpass.com/" target='blank' ><img src="https://cdn.prod.website-files.com/64c7a317aea92912392c0420/64e5091a2d92fe18d529fbb5_ClassPass-Logo_blue.webp"/></a>
                <a href="https://ru.airbnb.com/" target='blank' ><img src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"/></a>
                <a href="https://www.deel.com/" target='blank' ><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Deel_Logo.png"/></a>
              </div> 
              <div className="logo-slider">
                <a href="https://www.doordash.com/" target='blank' ><img src="https://freepnglogo.com/images/all_img/1725385918doordash-logo.png"/></a>
                <a href="https://scale.com/" target='blank' ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scale_AI.svg/640px-Scale_AI.svg.png"/></a>
                <a href="https://www.airtable.com/" target='blank' ><img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1684314205/redlandsusdnet/iyjwz2rhyg0hjeedz5ut/Airtable-1024x512-20191209.png"/></a>
                <a href="https://www.whatnot.com/" target='blank' ><img src="https://miro.medium.com/v2/resize:fit:1400/1*iJ0_tQFw0y-AhyjM9rqoPQ.png"/></a>
                <a href="https://classpass.com/" target='blank' ><img src="https://cdn.prod.website-files.com/64c7a317aea92912392c0420/64e5091a2d92fe18d529fbb5_ClassPass-Logo_blue.webp"/></a>
                <a href="https://ru.airbnb.com/" target='blank' ><img src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"/></a>
                <a href="https://www.deel.com/" target='blank' ><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Deel_Logo.png"/></a>
              </div>
          </div>
          <div style={{height:"10px"}}></div>

          <div className='branding'>
              <div className="brander">
                <a href="https://empireportfolio.com/" target='blank' ><img src="https://empireportfolio.com/wp-content/uploads/2023/03/empire_logo.png"/></a>
                <a href="https://www.avenueone.com/" target='blank' ><img src="https://images.otta.com/search/width_400/Y29tcGFueS1sb2dvcy8xNjM2NC05M1F6Wnc5VDFxaUR5SkMtdFJkeVl1REY4R0lXUXJZWEM3bkZmcnRqdjJvLnBuZw.png"/></a>
                <a href="https://techcrunch.com/" target='blank' ><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/techcrunch_logo_icon_170625.png"/></a>
                <a href="https://www.nytimes.com/" target='blank' ><img src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png"/></a>
                <a href="https://www.zdnet.com/" target='blank' ><img src="https://seeklogo.com/images/Z/ZDNet-logo-347F1C3C61-seeklogo.com.png"/></a>
                <a href="https://www.forbes.ru/" target='blank' ><img src="https://www.ranquilco.com/sites/ranquilco.com/files/forbes-logo-black-transparent.png"/></a>
              </div> 
              <div className="brander">
                <a href="https://empireportfolio.com/" target='blank' ><img src="https://empireportfolio.com/wp-content/uploads/2023/03/empire_logo.png"/></a>
                <a href="https://www.avenueone.com/" target='blank' ><img src="https://images.otta.com/search/width_400/Y29tcGFueS1sb2dvcy8xNjM2NC05M1F6Wnc5VDFxaUR5SkMtdFJkeVl1REY4R0lXUXJZWEM3bkZmcnRqdjJvLnBuZw.png"/></a>
                <a href="https://techcrunch.com/" target='blank' ><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/techcrunch_logo_icon_170625.png"/></a>
                <a href="https://www.nytimes.com/" target='blank' ><img src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png"/></a>
                <a href="https://www.zdnet.com/" target='blank' ><img src="https://seeklogo.com/images/Z/ZDNet-logo-347F1C3C61-seeklogo.com.png"/></a>
                <a href="https://www.forbes.ru/" target='blank' ><img src="https://www.ranquilco.com/sites/ranquilco.com/files/forbes-logo-black-transparent.png"/></a>
              </div> 
          </div>
          

        {/* there will be auto slider width brands */}
        <div style={{margin:"40px"}}>

        </div>
        <div className="parts " >
          <div className="part1">
              <h4 style={{color:"orange"}} >Solutions that work for you</h4>
              <small style={{color:"orange"}} >Brex meets you where you are — and takes you where you want to go.</small>
          </div>
          <div className="part2">
              <div className="flag1">
                  <div className="flag-container">
                  <h5>Brex for enterprise</h5>
                  <p>Easy-to-use corporate cards and spend management software in an integrated global solution.</p>
                  <button  onClick={() => setActive("active")} >Learn more</button>
                  <img src="https://brand.brex.com/transform/85589086-d126-4440-98d8-da65baadc9dd/mobile-pay-with-ease?io=transform:fit,width:2000,height:1795&quality=95"/>

                  </div>
              </div>
              <div className="flag2">
              <div className="flag-container">
                  <h5 style={{color:"white"}} >Brex for startups</h5>
                  <p style={{color:"white"}} >Fast access to global cards, business account (send ACH and wires), spend management, and bill pay.</p>
                  <button onClick={() => setActive("active")} >Learn more</button><br />
                  <img src="https://brand.brex.com/m/147e2d4d24f6e35b/webimage-HP-4card-card.png"/>

                  </div>
              </div>
          </div>
        </div>
        <div className="budget-texts " >
            <div>
              <h5>Flexible spend-limits for any need</h5><br />
              <small>Enable spend for any purpose — from travel to stipends to procurements — at all levels of your company. All on one card. With controls built in. That's the magic of budgets.</small><br />
              <button  onClick={() => setActive("active")} >See how budgets work</button>
            </div>
        </div><br /><br /><br />
        <div className="budget-select ">
            <div className='budget-central'>
                <h3>Create a budget</h3>
                <div>
                <button onClick={() => setActive("active")} > <img src="https://img.icons8.com/?size=100&id=3504&format=png&color=FFFFFF"/> Bussiness travel</button>
                <button onClick={() => setActive("active")} > <img src="https://img.icons8.com/?size=100&id=WcKsgSRonqil&format=png&color=FFFFFF"/> Offsites</button>
                <button onClick={() => setActive("active")} > <img src="https://img.icons8.com/?size=100&id=107714&format=png&color=FFFFFF"/> Procurement</button>
                <button  onClick={() => setActive("active")} > <img src="https://img.icons8.com/?size=100&id=42286&format=png&color=FFFFFF"/> Stipends</button>
                <button  onClick={() => setActive("active")} > <img src="https://img.icons8.com/?size=100&id=eWspXrbpkpuF&format=png&color=FFFFFF"/> General budget</button>
                </div>
        <div style={{margin:"10px"}}></div>
        </div>
        </div>
        <div style={{margin:"40px"}}></div>
        <div className='already'>
            <div className="already1">
                  <h1>Already a customer?</h1>
                  <p>Connect with a community of other customers and power users, as well as builders here at Brex. Plus, opt in for early access releases, local meetups, and brand engagement opportunities.</p>
                  <button   onClick={() => setActive("active")}>Learn more <img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-orange.png"/></button>
            </div>
            <div className="already2">
                  <img src="https://brand.brex.com/transform/73ce849e-9de4-4947-9c8c-c10f42b8d1e5/Brex_connect_cta?io=transform:fit,width:1850,height:1334&quality=95"/>
            </div>
        </div>
        <div style={{margin:"40px"}}></div>
        

            

        <div style={{margin:"40px"}}></div>
          <div className="tvbrex ">
            <div className="tv1">
              <div className='tv1-container'>
              <h6>See what Brex can do for you</h6>
              <p>Get in touch to learn how our spend solution can increase financial efficiency and speed for your company.</p>
              <div className='tv-btns'>
              <button onClick={() => setActive("active")} >Get Started</button>
              </div>
              </div>
            </div>
            <div className="tv2">
                <img src="https://brand.brex.com/transform/d2f2341f-92ea-4983-a67d-417a52921900/Closed-loop-dark?io=transform:fit,width:1850,height:1850&quality=95"/>
            </div>
          </div>
         

          <span className={active}>
            <div className="box">
                <img src="https://pngfre.com/wp-content/uploads/X-1.png" style={{cursor:"pointer"}} onClick={()=> setActive("modal")}/>
                <div className="mini-box">
                <h6>Log-in</h6>
                <div>
                    <p>Your email:</p>
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div>
                    <p>Your password:</p>
                    <input type="password" placeholder='Enter your password'/>
                </div>
                <button className='login-btn'>Log in</button><br />
                <a style={{color:"orange"}}>Not a member? </a><a style={{color:"aliceblue", cursor:"pointer"}}  onClick={() => setArticle("signup2", setActive("modal"))}>Sign Up Now</a>
                </div>
            </div>
        </span>
        <span className={article}>
            <div className="box2">
                <img src="https://pngfre.com/wp-content/uploads/X-1.png" style={{cursor:"pointer"}}  onClick={()=> setArticle("modal")}/>
                <div className="mini-box">
                <h6>Create account</h6>
                <div>
                    <p>Type email:</p>
                    <input type="email" placeholder='Enter email'/>
                </div>
                <div>
                    <p>Create Username:</p>
                    <input type="text" placeholder='Enter password'/>
                </div>
                <div>
                    <p>Create password:</p>
                    <input type="password" placeholder='Enter password'/>
                </div>
                <button className='login-btn'>Create</button>
                <a style={{color:"orange"}}>Already have account? </a><a style={{color:"aliceblue", cursor:"pointer"}}  onClick={() => setActive("active", setArticle("modal"))} >Sign in</a>
                </div>
            </div>
        </span>
    </div>
    
  )
}

export default Home