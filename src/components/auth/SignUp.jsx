import React, { useEffect, useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

import "react-web-tabs/dist/react-web-tabs.css";



const SignUp = (props) => {
  

  return (
    <Fragment>
      <div>
       

        {/* Body */}
        <main>
          <section
            className='ui-full-bg-norm big-hero cord-auth '
          >
            <div className='container'>
              <div className="row">
                <div className="col-md-9 mx-auto">
                  
           <div className='ui-wrapper heading-content'>
                <h1 className='font-gilroylight fs-50 brand-b bold mrgt ui-text-center'>
                 HackerRank 
                </h1>
                <h4 className='font-gilroylight fs-20  brand-b bold -mrgt ui-text-center'>
                 For Developers
                </h4>
                <p className='font-gilroylight fs-15 -mrgt  brand-b  mrgb2 ui-text-center'>
                 Practice coding, prepare for interview and get hired.
                </p>
                <div className='row'>
                  <div className='col-md-6 mx-auto'>
                    <div className='bg-white con--form up box ui-box-shadow-dark-light'>
                      <Tabs defaultTab='one' onChange={(tabId) => {}}>
                        <TabList>
                          <Tab tabFor='one' className='font-gilroymedium'>
                            {/* <span className="tabicon"><img src="images/assets/lend.svg" alt="cart-icon" /></span> */}
                            <span className=' tabtext bold'>Sign Up</span>
                          </Tab>
                          <Tab tabFor='two' className='font-gilroymedium'>
                            {/* <span className="tabicon"><img src="images/assets/cart.svg" alt="cart-icon" /></span> */}
                            <span className=' tabtext bold'>
                              Login
                            </span>
                          </Tab>
                        </TabList>

                        <TabPanel tabId='one'>
                          <div className='tab--bx'>

                          <form  className="mrg">

                              <div className="form-group ctrl--x">
                                  <input name="email" className="form-control font-gilroy" type="email" placeholder="Your user name or email" />
                                  <span class="focus-input100" data-symbol="&#xf206;"></span>
                              </div>

                              <div className="form-group ctrl--x">
                                  
                                  <input className="form-control font-gilroy" type="password" placeholder="Your password" />
                                  <span class="focus-input100" data-symbol="&#xf190;"></span>
                              </div>

                              <div className="form-group">
                                  <div className="d-flex align-items-center">
                                      <div className="custom-control custom-checkbox">
                                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                          <label className="custom-control-label brand-b font-gilroy" for="customCheck1"><span className="brand-b">Remember me</span></label>
                                      </div>
                                      <div className="ml-auto">
                                          <Link to="" className="font-gilroy brand-plight  fs-13 "><span>Forgot Your password?</span></Link>
                                      </div>
                                  </div>
                                
                              </div>

                        
                              <div className='form-group mrgt last'>
                                <div className='d-flex bttn-block  align-items-center'>
                                  
                                <div className='ml-auto'>
                                      <button className='btn sm-btn bg-brand-o onwhite font-gilroymedium fs-16'>
                                      Log in
                                      </button>
                                  </div> 
                                  </div>
                              </div>



                              <div className='oauth'>
                                <div className='row'>
                                  <div className='col-md-12 mrgt3 mx-auto'>
                                    <h4 className='ors text-center '>
                                     or connect with <hr className='hr-2' /><hr className='hr-1' /> 
                                    </h4>
                                  </div> 
                                </div>
                                <div className='row'>
                                  
                                <div className="col-md-12 mrgt">
                                    <div className="d-flex justify-content-around menu-icon">
                                        
                  
                                        <div>
                                          <Link>
                                            <img  src="../images/facebook.svg" width="30px" alt="facebook" className="pt-3" />
                                          </Link>
                                        </div>
                                        <div>
                                          <Link>
                                            <img  src="../images/google.svg" width="30px" alt="google" className="pt-3" />
                                          </Link>
                                        </div>
                                    
                                        
                                        <div>
                                          <Link>
                                            <img src="../images/linkedin.svg" width="30px" alt="linkedin" className="pt-3" />
                                          </Link>
                                        </div>

                                        
                                        <div>
                                          <Link>
                                            <img  src="../images/github.svg" width="30px" alt="github" className="pt-3" />
                                          </Link>
                                        </div>
                                        
                                        

                                    </div>
                                  
                                </div>

                                
                                </div>
                              </div>
   

                              </form>

                          </div>
                        </TabPanel>

                        <TabPanel tabId='two'>
                          <div className='tab--bx'>
                          </div>
                        </TabPanel>
                      </Tabs>
                    </div>

                    <div className='col-md-12 mx-auto'>

                      <div className='text-center'>
                        <p className='redirect brand-b fs-13'>
                          By signing in you agree to out <Link className='tnc fs-13 brand-plight'>Terms of Service <span className='fs-13 brand-b'>and</span> Privacy Policy</Link>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
  
                </div>
              </div> 
            </div>
          </section>
        </main>

        {/* Footer */}
      </div>
    </Fragment>
  );
};

export default SignUp;
