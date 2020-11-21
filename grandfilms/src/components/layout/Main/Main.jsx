import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../../routes/About/About";
import Visuals from "../../routes/Visuals/Visuals";
import Home from "../../routes/Home/Home";
import Media from "../../routes/Media/Media";
import axios from 'axios';
import Contact from "../../routes/Contact/Contact";
import Background from '../../../grandfilmsbg.mp4'


const Main = () => {
    return (
        <main>
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
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/media" component={Media} />
                <Route path="/visuals" component={Visuals} />
                <Route path="/contact" component={Contact} />
                <Route path="*" render={() => <Redirect to="/home" />} />
            </Switch>
        </main>
    )
}

export default Main;