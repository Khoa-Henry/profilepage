import React from 'react';
// import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Me from './Pics/me.jpg'


export default function Home() {
    return(
        <>
            <section id="header" className="align-items-center page-container" style={{paddingTop:"50px"}}>
                <div className="container-fluid nav_bg content-wrap">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1>Hello, I'm a GOLD III TFT Player For {""}<strong className="brand-name">Tier1 Gaming Lounge</strong></h1>
                                <h3 className="my-3">I am currently working toward getting Sett lvl 3</h3>
                                <div className="mt-3">
                                    <Link to="/about" className="btn-get-started">Learn More About Me</Link>
                                    <a href="https://www.linkedin.com/in/khoa-henry-nguyen/" target="_blank" rel="noreferrer" className="btn-get-started" >Linkedin</a>
                                    <a href="https://www.instagram.com/henry1_0/" target="_blank" rel="noreferrer" className="btn-get-started">Instagram</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img" style={{textAlign: "center"}}>
                                <img src={Me} className="img-fluid animated img" alt="profile"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}