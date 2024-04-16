import React from 'react'




function Home() {
  return (
   <> 
   <div className='row'>
    <div className="col-md-1"></div>
   <div className="col-md-2 d-flex  flex-column">
    <div className='giftcardlevel'>
    <img className='mt-5' src="https://store.akamai.steamstatic.com/public/images//gift/steamcards_promo_03.png?v=1" alt="" width={'180px'} height={'80px'} />

<div className='giftcard d-flex  flex-column'>
 <p> SETAM GIFT CARDS</p>
 <p style={{marginTop:'-18px', fontSize:'14px'}}>Give the gift of game</p>
 </div>
 <p style={{color:'#536f86', fontSize:'14px', fontWeight:'700'}}>RECOMMENDED</p>

<div className='effect'>
<p style={{marginTop:'-15px',fontSize:'12px'}}>By Friends</p>
 <p style={{marginTop:'-15px',fontSize:'12px'}}>By Curators</p>
 <p style={{marginTop:'-15px',fontSize:'12px'}}>Tag</p>
</div>
 
 <p style={{fontWeight:'700', color:'#536f86', fontSize:'14px'}}>BROWSE CATEGORIES</p>
 <div className='browse-categorie'>
    <p>Top Sellers</p>
    <p>New Releases</p>
    <p>Upcoming</p>
    <p>Sepcials</p>
    <p>VR Titles</p>
    <p>Controller-Friendly</p>
    <p>Great on Deck</p>
    
  </div>
  <p style={{fontWeight:'700', color:'#536f86', fontSize:'14px'}}>BROWSE BY GENRE</p>
  <div className='browse-categorie'>
    <p>Free To Play</p>
    <p>Early Access</p>
    <p>Action</p>
    <p>Adventure</p>
    <p>Casule</p>
    <p>Indie</p>
    <p>Massively Multiplayer</p>
    <p>Racing</p>
    <p>RPG</p>
    <p>Simulation</p>
    <p>Sports</p>
    <p>Strategy</p>

  </div>
    </div>
   </div>

   <div className="col-md-9">
    <div className='Navbar2 d-flex mt-5'>
    <ul className='d-flex mt-2'>
        <li className='me-4'>Your store</li>
        <li className='me-4' >New&Noteworthy</li>
        <li className='me-4'>Categories</li>
        <li className='me-4'>Point Shop</li>
        <li className='me-4'>News</li>
        <li>Labs</li>
    </ul>
    <div className='search'>
      <input type="text" placeholder='search'/>
      <img src="https://store.akamai.steamstatic.com/public/images/v6/search_icon_btn.png" alt="" />
    
    </div>
    
       </div>
                  <h2 className='heading1 mt-5'>FEATURED & RECOMMENDED</h2>
                 
            <div className="row">
  
  <div className="col-md-10">
     <div className='sider_home'>

      <div className="row">
        <div className="col-md-7">
          <div className='slider_img1'>
            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg?t=1712911294" alt="" />
          </div>
        </div>
        <div className="col-md-5">
         <h4 className='mt-3'>PUBG:BATTLEGROUNDS</h4>

         <div className="row">
          <div className="col-md-6">
            <div className='slider_img2'>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_034714c0f118657ac694c5b9c43bb647ed9ec051.600x338.jpg" alt="" />
            </div>
            <div className='slider_img2 mt-3'>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_63bb4a659968c3417ddd2ea5fd82cd2143e458a0.600x338.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6">
          <div className='slider_img2'>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_23af2e59855a833c22d0c11ca23a719f54a554ff.600x338.jpg" alt="" />
            </div>
            <div className='slider_img2 mt-3'>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_3857268f02113c5095ff7bc73f814bd80ade8c2e.600x338.jpg" alt="" />
            </div>
          </div>
         </div>
         <p className='slider_text'>Just Updated</p>
         <button className='btn_slider p-1'>Top Seller</button>
         <div className='d-flex justify-content-between'>
          <p className='mt-2'>Free To Play</p><span className='back_slider me-3'></span>
         </div>
        </div>
      </div>
      </div>  


  </div>
  <div className="col-md-2"></div>
</div>
  

         <div className="row">
          
                   
          <div className="col-md-10">
          <div className='d-flex justify-content-between mt-5'>
          <p className='heading1'>SPECIAL OFFERS</p><span><button className='btn_special'>BROWES MORE</button></span>
         </div>
          

          <div className="row">
            <div className="col-md-4">
            <div className='offer_special'>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/spotlights/9005aade590386b7b49a29d5/spotlight_image_english.png?t=1711995778" alt="" />
               <div className=' special_text ms-3'>
               <p className='mb-1'>MIDWEEK DEAL</p>
                <p style={{fontSize:'12px'}}>Offer ends 15 Apr @ 10:30pm</p>
                <button className='btn_offer2 ms-4 '>-60%</button><span style={{color:'#BEEE11'}} className='ms-2'>₹ 211</span>
               </div>
            </div>
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className='special_offer1'>
                     <img src="https://cdn.cloudflare.steamstatic.com/steam/spotlights/0d49cb2aa8656f44b9f54720/spotlight_image_english.jpg?t=1711991934" alt="" />
                     <div className=' special_text ms-3'>
               <p className='mb-1'>MIDWEEK DEAL</p>
                <p style={{fontSize:'12px'}}>Offer ends 22 Apr @ 10:30pm</p>
                <button className='btn_offer2 ms-4 '>-50%</button><span style={{color:'#BEEE11'}} className='ms-2'>₹ 699</span>
               </div>
                  </div>
                </div>


                <div className="col-md-4">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className='special_offer2 '>
                      <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/750130/header.jpg?t=1711381597" alt="" />
                      <div className=' special_text ms-2 mt-2 d-flex'>
               
                      <button className='btn_offer2 ms-3 '>-75%</button><span className='ms-2' style={{color:'#BEEE11'}}>₹ 549</span>
               </div>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center align-items-center mt-1">
                  <div className='special_offer3 mt-2 mb-5'>
                      <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1205450/header.jpg?t=1705692327" alt="" />
                      <div className=' special_text ms-2 mt-2 d-flex'>
               
               <button className='btn_offer2 ms-3 '>-75%</button><span className='ms-2' style={{color:'#BEEE11'}}>₹ 114</span>
        </div>
                      
                    </div>
                    
                  </div>
                  
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
  


</div>


            

      

         
<div className="col-md-2"></div>
</div>

          </div>

                  
  </div>



   
   </>
  )
}

export default Home
