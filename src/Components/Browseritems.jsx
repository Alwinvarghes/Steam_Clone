import React from 'react'

function Browseritems() {
  return (
    <>
      

      <div>
        <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-9 mt-2 mb-5">
            <h2 className='heading1'>BROWSE STEAM</h2>
            <div className="row">
            <div className="col-md-6">
              
              <div className="row">
                <div className="col-md-6">
                  <div className='browser shadow'>
                  NEW RELEASES
                  </div>
                </div>
                <div className="col-md-6">
                <div className='browser shadow'>
                    SPECIALS
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <div className="row">
                <div className="col-md-6">
                  <div className='browser shadow'>
                    FREE GAMES
                  </div>
                </div>
                <div className="col-md-6">
                <div className='browser shadow'>
                    BY YOUR TAGS
                  </div>
                </div>
              </div>
            </div>

           </div>
            </div>

            <div className="col-md-1"></div>
        </div>
      </div>


      <div>
      <div className="row mb-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <div className='d-flex justify-content-between'>
          <p className='heading1'>UNDER ₹ 500</p><span><button className='btn_special'>UNDER ₹ 500</button></span>
         </div>
           <div className="row">
            <div className="col-md-6">
              
              <div className="row">
                <div className="col-md-6">
                  <div className='popular shadow'>
                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1151340/header_292x136.jpg?t=1712851052" alt="" />
                    <p className='ms-2'>₹ 499</p>
                  </div>
                </div>
                <div className="col-md-6">
                <div className='popular shadow'>
                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header_292x136.jpg?t=1711128146" alt="" />
                    <p className='ms-2'>₹ 479</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <div className="row">
                <div className="col-md-6">
                  <div className='popular shadow'>
                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header_292x136.jpg?t=1700231592" alt="" />
                    <p className='ms-2'>₹ 460</p>
                  </div>
                </div>
                <div className="col-md-6">
                <div className='popular shadow'>
                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header_292x136.jpg?t=1712773871" alt="" />
                    <p className='ms-2'>₹ 375</p>
                  </div>
                </div>
              </div>
            </div>

           </div>
        </div>
        <div className="col-md-2"></div>
      </div>
     </div>

    </>
  )
}

export default Browseritems
