import React from 'react'

function Footer() {
  return (
    <>
    <div className=' last_signin d-flex justify-content-center align-items-center bg-black flex-column'>
     
     <h3 style={{color:'#67c1f5'}}>Looking for recommendations?</h3>

     <p>Sign in to view personalized recommendations</p>
     <button className='btn'>Sign In</button>
     <p className='mt-3'>Or <span style={{color:'#1A9FFF'}}>sign up</span> and join Steam for free</p>
    </div>

    
    <div className='footer'>
    <div className=' footer_border d-flex justify-content-center align-items-center border'>
       <div className='footer_valve p-3'>
       <img src="https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png" alt="" width={'100px'}/>
       </div>
       <div className='footer_content mt-3'>
        <p>© 2024 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.<br/>VAT included in all prices where applicable. <span style={{color:'white'}}>Privacy Policy   |   Legal   |   Steam Subscriber Agreement   |   Refunds   |   Cookies</span></p>
        </div>
        <div className='footer_steam p-3'>
            <img src="https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png" alt="" width={'100px'}
            height={'30px'}/>
        </div>
       
        
        </div>
        <div className='footer_value text-center mt-3'>
            About Valve | Jobs | Steamworks | Steam Distribution | Support | Gift Cards | 
FacebookSteam | X@steam</div>
    </div>
    </>
    
  )
}

export default Footer
