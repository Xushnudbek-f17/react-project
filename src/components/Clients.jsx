import React, { useState } from 'react'
import "./Clients.css"
import "animate.css"
function Clients() {

  // <img src="https://images.ctfassets.net/trvmqu12jq2l/12YUTHheFRGhFJp4UfQmAO/cc572d46ecb6cf26a07db8c3680bcbf4/twoColumnFeature_dx2.jpg?fm=jpg&q=90&w=1200" />
  // <img src="https://gray-kttc-prod.cdn.arcpublishing.com/resizer/v2/IAPPCH75JZBZ3IXCVWG75JEIP4?auth=9b179d45a280f90b3a1447c427d7759fee6df3d3418c2ccf2ac7081ada73912f&width=800&height=450&smart=true"/>
  // <img src="https://localite.com/wp-content/uploads/2021/01/795x448-HO-Renters@1x.png" />

    const [partner, setPartner] = useState("partners-default")
    const [partner2, setPartner2] = useState("latin")
    const [partner3, setPartner3] = useState("latin")

    const clientRight = (e)=>{
        setPartner("latin")
        setPartner3("latin")
        setPartner2("partners-default2")    
            
    }
    const client2Right = (e)=>{
      setPartner("latin")
      setPartner2("latin")
      setPartner3("partners-default3")    
    }
    const client2Left = (e)=>{
      setPartner2("latin")
      setPartner3("latin")
      setPartner("partners-default")

    }
    const client3Left = (e)=>{
      e.preventDefault()
      setPartner("latin")
      setPartner3("latin")
      setPartner2("partners-default2")
      
    }

  return (
    <div className='Clients  animate__animated   animate__fadeIn'>
        <div className="client-intro">
          <h1 className=' animate__animated animate__fadeInLeft' style={{color:"white"}} >The world’s best companies run on Brex.</h1>
          <p className=' animate__animated animate__fadeInLeft' style={{color:"white"}} >Join the 25,000 companies making every dollar count with Brex.</p>
          <div className="sponsors">
            <div className="doordash" onClick={()=>{window.location.href="https://www.doordash.com/"}} >
              <img className=' animate__animated animate__fadeInLeft' src="https://www.pngall.com/wp-content/uploads/15/Door-Dash-Logo-PNG-Images-HD.png"/>
            </div>
            <div className="celtics" onClick={()=>{window.location.href="https://www.celticsstore.com/"}} >
                <img className=' animate__animated animate__fadeInLeft'  src="https://i.ibb.co/DztnZKt/celtics.png"/>
            </div>
            <div className="lemonade" onClick={()=>{window.location.href="https://www.lemonade.com/"}} >
                <img className=' animate__animated animate__fadeInLeft'  src="https://images.prismic.io/colormatics/63c117f1-aa8e-4e91-82a4-145e5784268b_Lemonade+Logo_White.png?auto=format%2Ccompress&fit=max&q=50&w=800"/>
            </div>
          </div>
        </div>
        <div className='sponsor'>
              <div className="sponsor-slider">
                <a href="https://www.gong.io/" target='blank' ><img src="https://brand.brex.com/transform/fabf7338-7936-4d9a-8ec6-78664f51ce10/Gong?io=transform:fit,width:172,height:60&quality=95"/></a>
                <a href="https://drinkag1.com/" target='blank' ><img src="https://endurance.biz/wp-content/uploads/2023/09/230911_AG1-becomes-global-IRONMAN-and-IRONMAN-70.3-series-official-foundational-nutrition-supplement.png"/></a>
                <a href="https://www.airtable.com/" target='blank' ><img src="https://brand.brex.com/transform/dad32602-5429-423d-8309-36e692d5b7b7/Airtable?io=transform:fit,width:230,height:50&quality=95"/></a>
                <a href="https://seatgeek.com/" target='blank' ><img src="https://brand.brex.com/transform/e1a76ca9-c27a-4fdb-b5d7-fde6cf6d730a/SeatGeek?io=transform:fit,width:84,height:60&quality=95"/></a>
                <a href="https://www.hims.com/" target='blank' ><img src="https://brand.brex.com/transform/b614333b-36ba-4fe8-b5f9-c48b1c0ab8e0/logo-hims?io=transform:fit,width:156,height:60&quality=95"/></a>
                <a href="https://www.bamboohr.com/i2" target='blank' ><img src="https://brand.brex.com/transform/2a73eb82-2ac6-407c-8a11-24f9698531cb/BambooHR?io=transform:fit,width:348,height:50&quality=95"/></a>
                <a href="https://atari.com/" target='blank' ><img src="https://brand.brex.com/transform/a0fabe0c-dd0e-4d04-946b-3307134958de/Atari?io=transform:fit,width:216,height:50&quality=95"/></a>
              </div>
              <div className="sponsor-slider">
                <a href="https://www.gong.io/" target='blank' ><img src="https://brand.brex.com/transform/fabf7338-7936-4d9a-8ec6-78664f51ce10/Gong?io=transform:fit,width:172,height:60&quality=95"/></a>
                <a href="https://drinkag1.com/" target='blank' ><img src="https://endurance.biz/wp-content/uploads/2023/09/230911_AG1-becomes-global-IRONMAN-and-IRONMAN-70.3-series-official-foundational-nutrition-supplement.png"/></a>
                <a href="https://www.airtable.com/" target='blank' ><img src="https://brand.brex.com/transform/dad32602-5429-423d-8309-36e692d5b7b7/Airtable?io=transform:fit,width:230,height:50&quality=95"/></a>
                <a href="https://seatgeek.com/" target='blank' ><img src="https://brand.brex.com/transform/e1a76ca9-c27a-4fdb-b5d7-fde6cf6d730a/SeatGeek?io=transform:fit,width:84,height:60&quality=95"/></a>
                <a href="https://www.hims.com/" target='blank' ><img src="https://brand.brex.com/transform/b614333b-36ba-4fe8-b5f9-c48b1c0ab8e0/logo-hims?io=transform:fit,width:156,height:60&quality=95"/></a>
                <a href="https://www.bamboohr.com/i2" target='blank' ><img src="https://brand.brex.com/transform/2a73eb82-2ac6-407c-8a11-24f9698531cb/BambooHR?io=transform:fit,width:348,height:50&quality=95"/></a>
                <a href="https://atari.com/" target='blank' ><img src="https://brand.brex.com/transform/a0fabe0c-dd0e-4d04-946b-3307134958de/Atari?io=transform:fit,width:216,height:50&quality=95"/></a>
              </div>
          </div><br /><br />
          <div className="stories">
          <div className={partner}>
            <div className="partner-img"></div>
            <div className="partner-texts">
                <img className='partner-logo' src="https://seeklogo.com/images/S/scale-ai-data-platform-logo-575FFB9F0C-seeklogo.com.png"/>
                <h3>“We’ve been with Brex since our early startup days. They’ve helped us grow, and have grown with us.”</h3>
                <p>— Alexandr Wang, founder and CEO, Scale AI</p>
                <div className='partner-btns'>
                    <button onClick={clientRight}><img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-orange.png"/></button>
                </div>
            </div>
        </div><br />
        <div className={partner2}>
            <div className="partner-img2">
              <img src="https://brand.brex.com/transform/094979cd-e1ab-465b-9cd8-eb8e6d5e4fb6/Ty_Barton_LE_auto_x2-1-1-1?io=transform:fit,width:1850,height:1381&quality=95"/>
            </div>
            <div className="partner-texts">
                <img className='partner-logo' src="https://brand.brex.com/transform/57175c98-bfff-4092-968a-d79773cb948e/Signifyd?io=transform:fit,width:1850,height:456&quality=95"/>
                <h3>“Brex budgets keep everyone accountable while giving us real-time visibility into all spend.”</h3>
                <p>— Ty Barton, Accounting Manager, Signifyd</p>
                <div className='partner-btns'>
                    <button onClick={client2Left}><img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-orange.png"/></button>
                    <button onClick={client2Right}><img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-orange.png"/></button>
                </div>
            </div>
        </div><br />
        <div className={partner3}>
            <div className="partner-img"></div>
            <div className="partner-texts">
                <img className='partner-logo' src="https://brand.brex.com/transform/3c43480a-27de-45ff-b471-74ffba2c8122/HP-Seatgeek?io=transform:fit,width:1850,height:604&quality=95"/>
                <h3>“We’ve gone from spending 20 hours a month on close to under 2 hours, while achieving over 99% employee compliance.”</h3>
                <p>— Teddy Collins, Vice President of Corporate Finance at SeatGeek</p>
                <div className='partner-btns'>
                    <button onClick={client3Left}><img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-orange.png"/></button>
                </div>
            </div>
        </div>
          </div>
    </div>
  )
}

export default Clients