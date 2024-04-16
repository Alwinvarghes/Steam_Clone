import React from 'react'

function Category() {
  return (
    <>
            

           <div>
            <div className="row mb-5">
            <div className="col-md-2"></div>
            
              <div className="col-md-9 mb-5">
              <div>
            <h2 className='heading1 mb-4'>BROWSE BY CATEGORY</h2>
            </div>
                <div className="row">
                  <div className="col-md-6">

                    <div className="row">
                      <div className="col-md-6">
                        <div className='category_img1'>
                        
                        </div>
                        <p className='category_text'>ALL SPORTS</p>
                      </div>
                      <div className="col-md-6">
                      <div className='category_img2'>
                        
                        </div>
                        <p className='category_text'>VIRTUAL REALITY TITLES</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                      <div className='category_img3'>
                       
                        </div>
                        <p className='category_text'>SIMULATION</p>
                      </div>
                      <div className="col-md-6">
                      <div className='category_img4'>
                        
                        </div>
                        <p className='category_text'>CITY&SETTLEMENT</p>
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
              <div className="col-md-9">
                <div className='signup_mid'>
                  <div className='sign_up'>
                  <p>Sign in to view personalized recommendations</p>
                   <button className='btn'>Sign In</button>
                    <p>Or <span style={{color:'#1A9FFF'}}>sign up</span> and join Steam for free</p>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
           </div>
           
        
     
    </>
  )
}

export default Category
