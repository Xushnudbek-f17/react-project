import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import 'animate.css';
import { useState } from 'react';


function Home() {
const [active, setActive] = useState("modal")

  return (
    
    

    <div className='Home' >
     
        <div className="passages animate__animated  animate__fadeInLeft">
          <div className="passage1">
            <h2>Corporate cards and spend management teams actually love.</h2>
            <div className="pas1_btns">
              <button className='pas1_btn'>Contact Sales</button>
              <button className='pas1_btn2'>Open an Account</button>
            </div><div className='vertical-line'></div>
            <div className='pas1par1'>
                <h3>Brex for EnterPrise</h3>
                <p>Easy-to-use corporate cards and spend management software in an integrated global solution.</p>
            </div><div className='vertical-line'></div>
            <div className='pas1par1'>
                <h3>Brex for Start-ups</h3>
                <p>Fast access to global cards, business account (send ACH and wires), spend management, and bill pay.</p>
                
            </div>
          </div>
          <div className="passage2">
            <img src="https://brand.brex.com/m/5974f95cc7923a6/webimage-58befe7495fc3cf10778ba306c491e55edc60db9-2130x1584.jpg" alt="header" />
          </div>
        </div>


          <div className='logos'>
              <div className="logo-slider">
                <a href="https://www.doordash.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/14ab/f197/52c82ef157bbbbebc7f21278c43ae420?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwmGlVCeC3ea-AN2aqTbcEGEt4h3ax9De3hMkBAX5SkbrYUTFFMGxO78Fs34QVAPHx-wDJiyPXsJ8tkTjDBksHORo--z-1d-nzUpt7muro673z4BGzjZo5FpgodRWJicaKhZBfyRwMARDRWNQjawQb7rzGDELuCrH~5qSCU7Dj4Sg2DfSGXeNz4NNQSbZolf7UIZ4h5SYFZOMmwkAipJvelXVXBjDe8sR873PChMhe1moVvsqpAaSN7qVYPv1TPPAn-s0bC88n~dwmpipjc7o4WMjJ5OT30fGuc7669zphno7uzsuuk5LQT-LmFbOA2dCWax3Hot2EZLgoFU2gRwQg__"/></a>
                <a href="https://scale.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/8107/39c7/507547615bfcbcda559f4b4d88d6421e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DDppwu86m-nmDGfVodoC2zPXKzInUXyOCNR-ryKD58iy2xXVOaOS6KwEn8d6rvaC2yHUaPVKuqOv6C90oqXihwU2mtacOtF36yp1X9z4KAW6djTRHK69cWkXn2FYx7oIS~j6nH8nxNERC~rpBwUHHD5LHAl6SX310VkXFiK2twERz7L5Un4HUCNc2ngTduQ3YJxgBWdMkH4RhRTY33tvbLuBZ0gW3aMB-79-EyoAbQyZn424QgMmwbOZP-gp8YJuUKSYXomJSBlnu83wtwwfW7imrHY0ya8NodeVUzCMzSpi8Cm62~unbEFq2dz90sCWthfBPEzeMVdqBGB~-qN8Hw__"/></a>
                <a href="https://www.airtable.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/d20e/e98b/f29927c41669da70d693d59fb811f82f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FUDRhoR6BTQbNyXtOadk9HraBDc-OAxLtqcgMo1j-LnpPEEEX4SxV1Y0i5~d1kcPw3Rb4VkdK8irH11N7LUc2RB76F06SiTUWSXDkpeaAz9L10cgCKwXLcpRRfrcUymsDqG6qPW7bJui6OWAZpALd8NZzsQJ3E9zDdrck3YJGQDcPNlOoA90ZKGE8QqgjYPJgieQ-PXfyvqhteqmP0S42h23eZ-LANXatDZP~tA-zrKSPr5l7H16c34c0DP4sBTABw9MhjdkmQRb1V~uvqrkXoKdl2ZKHlv9JpMEKINtqGe36CwuOJkfvZuyC55iABtiJEn0X7E0wq7TsqMoPqNbMA__"/></a>
                <a href="https://www.whatnot.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/0080/b053/27b2a0f1c0173fe255d3305a4e73254a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gKzlGjLzMSq3Ts3xKsTwcsw5MS~fdM7mR4RrLLx-YOfsRA85CGUSncY0Dx7qPXtvJ83EMW-cd0CzmL8WAJRy2pgOp~t1SlL-b3kypVwnsurpQWvrhkS8EzLVGJWviPFbsfPEol5Q~Om2fjrDAZ7pkifT~MoMFuD0KbF2XUj5cE36nzodvGWoslbDdf3KZJmnm4vw1Z2F3BnmME1VCD2qn5Vi~vetaVBDoIrj3HsWkqmUqpPehhABQ8tsg7HKUCRytffDtHtlcX6fnCaHKDk9emsb~wkn3pd3oovqV0K3cHE~06K6MN5XkWDUQn29tz82CLfOXRGWchF9Y7QU~Dul2Q__"/></a>
                <a href="https://classpass.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/2b93/e254/b18b4d6f7510c6c98b06e87ef6d9d042?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwFNV8Rg5NOjdJ~64D7WSMYcKExcT8dWrrYDEKtlQBM~k0Y~~eCc7G8R~5XyhTxs8kXshuyCKmtIRGX8WcAlqAje5JDhBLS6ZSdzNHT3bf2iLRRM11ye7w1dJ6m0XIUZHW4XXpOyL9cRJnSniH6k0~hGFWTeA6DhR4pvgsl79xH4ilETNL7QHZo17MVSI6eEKdT1vG3XAFwFxFMHCO3L9Y8sYQFcYKnH9BlRrX2Kj-VyZqEVmDGOTG-rh50f-tj47mMfWzpgc9Kf51D24SuwrLLWDH15wu9sNTnzOcavpMH5zn58THb5x4~5Qgsl1LBJm4diOXGo9gDY07svKnPwrw__"/></a>
                <a href="https://ru.airbnb.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/91c4/944b/e04d99e3582f20e80613fd4f6805331e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JgdmblXLU6kJM5E1y5E0BXa4GZgYbp3HYQMAzpXmtRRv0F0QjBTUfQbxMvgT9y0w2LKdFuV7ZbFETed8vQLsDsCDgVueYhfCXLTtvXcDwB3F1mw3PKb8a6kTfeIm8~ydPjizTHEov0m75rKdMkEdt8OeR20ZVPP1lzJa2YIZ60SwO6u7UQ5~oLJ8ANbHJSdEJpDzCXznl~xSduil79TRo6rek8a86BZd2cVq9vsDLa7rMP9YPrWKal6EwIWFwOkN5cluu7JnzP6~mx14PT88os8kbD2t7EHw3HOsI6umTjVf-ywWuiM0R-oyghYFd9k~JThnuU5YMlBv1F37lDmp9g__"/></a>
                <a href="https://www.deel.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/5d58/5e10/09cfb1cabf287cb8e953478c08c3f2ff?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k73SP9WvM~6GqT-TBDWB2vuerOCEnvpOkihkOYmdr7aF6nU7~KQ5sZIRvOaaRj6n~rKk4qm87ZwPM7NarVBPZGjyAGKqKi~H033BGQ7c8m7jYxNWUqUZPHy8M6JdRiHdU99R~DHlkoRMMRKejwzWOwMIkQoiyb5PDwGcVV8G129FCgfL7z10leSWuCBrf~a8A8BzN1DDbFrU1r9h~p5JFZCRm2yjuhdFdSoRZJOxxVgfWYNOHqSAI1uaWACNjwoDoqw6jJp9Q7xc1TqdsFtBGMrUJDNK4NtuNe~AiHzQu4X-54vrkvfhfe1dr5iLQcq3gCBr-OgA69qDmdmD8jvyyA__"/></a>
              </div> 
              <div className="logo-slider">
                <a href="https://www.doordash.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/14ab/f197/52c82ef157bbbbebc7f21278c43ae420?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwmGlVCeC3ea-AN2aqTbcEGEt4h3ax9De3hMkBAX5SkbrYUTFFMGxO78Fs34QVAPHx-wDJiyPXsJ8tkTjDBksHORo--z-1d-nzUpt7muro673z4BGzjZo5FpgodRWJicaKhZBfyRwMARDRWNQjawQb7rzGDELuCrH~5qSCU7Dj4Sg2DfSGXeNz4NNQSbZolf7UIZ4h5SYFZOMmwkAipJvelXVXBjDe8sR873PChMhe1moVvsqpAaSN7qVYPv1TPPAn-s0bC88n~dwmpipjc7o4WMjJ5OT30fGuc7669zphno7uzsuuk5LQT-LmFbOA2dCWax3Hot2EZLgoFU2gRwQg__"/></a>
                <a href="https://scale.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/8107/39c7/507547615bfcbcda559f4b4d88d6421e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DDppwu86m-nmDGfVodoC2zPXKzInUXyOCNR-ryKD58iy2xXVOaOS6KwEn8d6rvaC2yHUaPVKuqOv6C90oqXihwU2mtacOtF36yp1X9z4KAW6djTRHK69cWkXn2FYx7oIS~j6nH8nxNERC~rpBwUHHD5LHAl6SX310VkXFiK2twERz7L5Un4HUCNc2ngTduQ3YJxgBWdMkH4RhRTY33tvbLuBZ0gW3aMB-79-EyoAbQyZn424QgMmwbOZP-gp8YJuUKSYXomJSBlnu83wtwwfW7imrHY0ya8NodeVUzCMzSpi8Cm62~unbEFq2dz90sCWthfBPEzeMVdqBGB~-qN8Hw__"/></a>
                <a href="https://www.airtable.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/d20e/e98b/f29927c41669da70d693d59fb811f82f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FUDRhoR6BTQbNyXtOadk9HraBDc-OAxLtqcgMo1j-LnpPEEEX4SxV1Y0i5~d1kcPw3Rb4VkdK8irH11N7LUc2RB76F06SiTUWSXDkpeaAz9L10cgCKwXLcpRRfrcUymsDqG6qPW7bJui6OWAZpALd8NZzsQJ3E9zDdrck3YJGQDcPNlOoA90ZKGE8QqgjYPJgieQ-PXfyvqhteqmP0S42h23eZ-LANXatDZP~tA-zrKSPr5l7H16c34c0DP4sBTABw9MhjdkmQRb1V~uvqrkXoKdl2ZKHlv9JpMEKINtqGe36CwuOJkfvZuyC55iABtiJEn0X7E0wq7TsqMoPqNbMA__"/></a>
                <a href="https://www.whatnot.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/0080/b053/27b2a0f1c0173fe255d3305a4e73254a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gKzlGjLzMSq3Ts3xKsTwcsw5MS~fdM7mR4RrLLx-YOfsRA85CGUSncY0Dx7qPXtvJ83EMW-cd0CzmL8WAJRy2pgOp~t1SlL-b3kypVwnsurpQWvrhkS8EzLVGJWviPFbsfPEol5Q~Om2fjrDAZ7pkifT~MoMFuD0KbF2XUj5cE36nzodvGWoslbDdf3KZJmnm4vw1Z2F3BnmME1VCD2qn5Vi~vetaVBDoIrj3HsWkqmUqpPehhABQ8tsg7HKUCRytffDtHtlcX6fnCaHKDk9emsb~wkn3pd3oovqV0K3cHE~06K6MN5XkWDUQn29tz82CLfOXRGWchF9Y7QU~Dul2Q__"/></a>
                <a href="https://classpass.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/2b93/e254/b18b4d6f7510c6c98b06e87ef6d9d042?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwFNV8Rg5NOjdJ~64D7WSMYcKExcT8dWrrYDEKtlQBM~k0Y~~eCc7G8R~5XyhTxs8kXshuyCKmtIRGX8WcAlqAje5JDhBLS6ZSdzNHT3bf2iLRRM11ye7w1dJ6m0XIUZHW4XXpOyL9cRJnSniH6k0~hGFWTeA6DhR4pvgsl79xH4ilETNL7QHZo17MVSI6eEKdT1vG3XAFwFxFMHCO3L9Y8sYQFcYKnH9BlRrX2Kj-VyZqEVmDGOTG-rh50f-tj47mMfWzpgc9Kf51D24SuwrLLWDH15wu9sNTnzOcavpMH5zn58THb5x4~5Qgsl1LBJm4diOXGo9gDY07svKnPwrw__"/></a>
                <a href="https://ru.airbnb.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/91c4/944b/e04d99e3582f20e80613fd4f6805331e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JgdmblXLU6kJM5E1y5E0BXa4GZgYbp3HYQMAzpXmtRRv0F0QjBTUfQbxMvgT9y0w2LKdFuV7ZbFETed8vQLsDsCDgVueYhfCXLTtvXcDwB3F1mw3PKb8a6kTfeIm8~ydPjizTHEov0m75rKdMkEdt8OeR20ZVPP1lzJa2YIZ60SwO6u7UQ5~oLJ8ANbHJSdEJpDzCXznl~xSduil79TRo6rek8a86BZd2cVq9vsDLa7rMP9YPrWKal6EwIWFwOkN5cluu7JnzP6~mx14PT88os8kbD2t7EHw3HOsI6umTjVf-ywWuiM0R-oyghYFd9k~JThnuU5YMlBv1F37lDmp9g__"/></a>
                <a href="https://www.deel.com/" target='blank' ><img src="https://s3-alpha-sig.figma.com/img/5d58/5e10/09cfb1cabf287cb8e953478c08c3f2ff?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k73SP9WvM~6GqT-TBDWB2vuerOCEnvpOkihkOYmdr7aF6nU7~KQ5sZIRvOaaRj6n~rKk4qm87ZwPM7NarVBPZGjyAGKqKi~H033BGQ7c8m7jYxNWUqUZPHy8M6JdRiHdU99R~DHlkoRMMRKejwzWOwMIkQoiyb5PDwGcVV8G129FCgfL7z10leSWuCBrf~a8A8BzN1DDbFrU1r9h~p5JFZCRm2yjuhdFdSoRZJOxxVgfWYNOHqSAI1uaWACNjwoDoqw6jJp9Q7xc1TqdsFtBGMrUJDNK4NtuNe~AiHzQu4X-54vrkvfhfe1dr5iLQcq3gCBr-OgA69qDmdmD8jvyyA__"/></a>
              </div> 
          </div>
          <div style={{height:"10px"}}></div>
          

        {/* there will be auto slider width brands */}
        <div style={{margin:"40px"}}>

        </div>
        <div className="parts animate__animated WOW animate__fadeInLeft" >
          <div className="part1">
              <h4>Solutions that work for you</h4>
              <small>Brex meets you where you are — and takes you where you want to go.</small>
          </div>
          <div className="part2">
              <div className="flag1">
                  <div className="flag-container">
                  <h5>Brex for enterprise</h5>
                  <p>Easy-to-use corporate cards and spend management software in an integrated global solution.</p>
                  <button>Learn more</button>
                  <img src="https://brand.brex.com/transform/85589086-d126-4440-98d8-da65baadc9dd/mobile-pay-with-ease?io=transform:fit,width:2000,height:1795&quality=95"/>

                  </div>
              </div>
              <div className="flag2">
              <div className="flag-container">
                  <h5>Brex for startups</h5>
                  <p>Fast access to global cards, business account (send ACH and wires), spend management, and bill pay.</p>
                  <button>Learn more</button>
                  <img src="https://brand.brex.com/m/147e2d4d24f6e35b/webimage-HP-4card-card.png"/>

                  </div>
              </div>
          </div>
        </div>
        <div className="budget-texts animate__animated WOW animate__fadeInLeft" >
            <div>
              <h5>Flexible spend-limits for any need</h5><br />
              <small>Enable spend for any purpose — from travel to stipends to procurements — at all levels of your company. All on one card. With controls built in. That's the magic of budgets.</small><br />
              <button>See how budgets work</button>
            </div>
        </div><br /><br /><br />
        <div className="budget-select animate__animated WOW animate__fadeInLeft">
            <div className='budget-central'>
                <h3>Create a budget</h3>
                <div>
                <button> <img src="https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1707/alekseyvanin170700251/81766297-baggage-luggage-line-icon-outline-vector-sign-linear-style-pictogram-isolated-on-white-symbol-logo.jpg"/> Bussiness travel</button>
                <button> <img src="https://static.vecteezy.com/system/resources/thumbnails/001/500/616/small_2x/building-icon-free-vector.jpg"/> Offsites</button>
                <button> <img src="https://img.freepik.com/premium-vector/package-box-icon-transparent-background_929446-156.jpg"/> Procurement</button>
                <button> <img src="https://media.istockphoto.com/id/1198332549/vector/american-usd-dollar-bill-outline-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=sEEpy_JLhCKzMj5BSF3-2eIBEFHNLbEa5eP7ebwhwtM="/> Stipends</button>
                <button> <img src="https://www.shutterstock.com/image-vector/geometric-shapes-triangle-square-circle-260nw-739582891.jpg"/> General budget</button>
                </div>
        <div style={{margin:"10px"}}></div>
        </div>
        </div>
        <div style={{margin:"40px"}}></div>
        <div className='already'>
            <div className="already1">
                  <h1>Already a customer?</h1>
                  <p>Connect with a community of other customers and power users, as well as builders here at Brex. Plus, opt in for early access releases, local meetups, and brand engagement opportunities.</p>
                  <button>Learn more <img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-orange.png"/></button>
            </div>
            <div className="already2">
                  <img src="https://brand.brex.com/transform/73ce849e-9de4-4947-9c8c-c10f42b8d1e5/Brex_connect_cta?io=transform:fit,width:1850,height:1334&quality=95"/>
            </div>
        </div>
        <div style={{margin:"40px"}}></div>
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

            

        <div style={{margin:"40px"}}></div>
          <div className="tvbrex animate__animated wow animate__fadeInLeft">
            <div className="tv1">
              <div className='tv1-container'>
              <h6>See what Brex can do for you</h6>
              <p>Get in touch to learn how our spend solution can increase financial efficiency and speed for your company.</p>
              <div className='tv-btns'>
              <button className='pas1_btn'  onClick={() => setActive("active")}>Contact Sales</button>
              <button className='pas1_btn2'>Open an account</button>
              </div>
              </div>
            </div>
            <div className="tv2">
                <img src="https://s3-alpha-sig.figma.com/img/ed93/1045/7bea69325a9628fb1a091b275a4df665?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nGAGtcNv9w-ZAiIIcvP6a0xtkgTHQKAKnwncR15~XZQj-gLitwoMCmXBnzqvxnDWI0ORXYt2LXYX0ncYRqq3sEmII~PD1s56I7OaoUY1Fpw6HOCRA~VjSNIs6BLPKp6MJPdNbw8SwytN8DhuMzBHpYHMBd78omxLTcQOmj~WlMXK1f2QN32PnsJCwMx1GAPAnH10BJBT8nqSTvxyzZgupjmgrMhZwisOZ~43-ZAyqLWPB9hHGwMiQn49XjbQkj9sOKC1uuXCNIvDOYGAL-n5UPANONOyYfiVXJ~KL8Na~sEKu90~-nps18Klav-uptyMKmhckfXBfkFXpVheTDvcwg__"/>
            </div>
          </div>
         
    </div>
    
  )
}

export default Home