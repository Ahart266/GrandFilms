import React, { useState, useEffect } from 'react';
import './home.scss';
import Background from '../../../grandfilmsbg.mp4'



const Home = (props) => {


    return (
    <>
     <video 
            autoPlay 
            muted 
            loop 
            preload='auto'
            style={{
                position:"sticky",
                width:"100%",
                height: "100%",
                left:"0",
                top:"0",
                objectFit:"cover",
                zIndex:"-1"

            }}>
                <source src={Background} type="video/mp4"/>
            </video>
    <div className="img">
    
        
        <h3>"Opportunities don't happen. You create them."</h3>
    </div>
        
        <div className="wrapper">
        <div id="bg"></div>
            <div className="first">
                <h2>WHO IS JAMES BRISTOL?</h2>
                <p>Also known as @Lilgrandfinale, my name is James Bristol. I am a professional videographer 
                    and photographer based in Atlanta, Ga. I specialize in recreating moments that will last you a lifetime.
                    As a former professional dancer, I have an understanding of storytelling and what is truly 
                    eye-catching. Whether I am in front of the camera or behind the camera I have always strived to find
                    the best momments possible. I picked up my first camera 3 years ago and in what it seems like a short time I have been able to shoot
                    weddings, music videos, commercials, and events. I am self taught and have always believed I am forever a student
                </p>
            </div>
            <div className="pics">
              <div className="second">
                
              </div>
              <div className="third">
                
              </div>
              <div className="forth">
                
              </div>
            </div>
        </div>
    </>

    )
}

export default Home;