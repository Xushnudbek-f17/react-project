
import "./Products.css"
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "animate.css"

function Products() {

    const [product,setProduct] = useState([])
    const [corzinaData,setCorzinaData] = useState([])
    useEffect(()=>{
        axios.get("https://66dc439047d749b72acb2409.mockapi.io/products")
        .then(res => setProduct(res.data))

    },[])

     function Ulazier(){
        
    }

    window.addEventListener("load", Ulazier());
    const ab = []

    const cozinaCard =(card) =>{
        setCorzinaData({...ab,[ab]:card})
        console.log(ab);
        
    }
    const [value, setValue] = useState("")


    const filteredProducts = product.filter( item =>{
        return item.post.title.toLowerCase().includes(value.toLowerCase())
    })
    

  return (
    <div className='Todo'>
        <div className="general  animate__animated  animate__fadeInRight">
                    <div className='intro-product'>
            <h1>Virtual Cards for all your needs</h1>
            <div className='brand-column'>
                <div className="nike-apple">
                    <div className="na-imgs">
                        <a href="https:/w/www.nike.com/" target='blank'><img src="https://pst.net/_ipx/f_webp&s_280x166/img/block-for-purchases-nike.png"/></a>
                    </div>
                    <div>
                    <h2>For any purchases</h2>
                    <p>Unlimited number of issued cards, spends or deposits</p>
                    </div>
                </div><div style={{height:"50px"}}></div>
                <div className="daily-apps">
                    <div className="da-imgs">
                        <a href="https://www.apple.com/app-store/" target='blank'><img src="https://seeklogo.com/images/A/apple-app-store-logo-358417D563-seeklogo.com.png"/></a>
                        <a href="https://ru.airbnb.com/" target='blank'><img src="https://www.shutterstock.com/image-vector/pink-background-white-line-airbnb-600nw-2203503727.jpg"/></a>
                        <a href="https://www.xbox.com/" target='blank'><img src="https://digiseller.mycdn.ink/preview/1130925/p1_4158098_571e1e09.png"/></a>
                        <a href="https://www.netflix.com/" target='blank'><img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png"/></a>
                        <a href="https://www.playstation.com/" target='blank'><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/PlayStation_App_Icon.jpg"/></a>
                        <a href="https://www.uber.com/" target='blank'><img src="https://logodix.com/logo/81038.jpg"/></a>
                    </div>
                    <div className="da-texts">
                    <h2>For work and entertainment</h2><br />
                    <p>Easy top up your cards by any convenient way </p><br />
                    </div>
                </div><div style={{height:"50px"}}></div>
                <div className="social-media">
                    <div className="sm-texts">
                    <h2>For affilate marketing</h2>
                    <p>Sign up to Brex and just pick up your first card in account dashboard</p>
                    </div>
                    <div className="sm-img"></div>
                </div>
            </div>
        </div><div style={{width:"20px", height:"100px"}}></div>
        </div><br />
        <div className="price-master">
        <h1>Search Cards For Your Need</h1>
        <input className="search-inp" type="text" onChange={(event) => setValue(event.target.value)} placeholder="Search Cards"/>
        </div>

        <div className="cards">
        
        {
            filteredProducts.map((item,index)=>{
                

                return(
            <div key={index} className="cardType" onClick={() => cozinaCard(item)}>
                <h4 key={item.post.title}>{item.post.title}</h4>
                <img key={item.post.img} src={item.post.img}/>
                <p key={item.post.price}>{item.post.price}$</p>
                {/* <small>{item.post.desc}</small> */}
                <button>Buy</button>
            </div>
                )
           })
        }</div>
         
    </div>
  )
}

export default Products;



