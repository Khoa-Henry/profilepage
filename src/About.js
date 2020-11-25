import React from 'react';
// import {Container,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import Amfam from './Pics/amfamlogo.png'
// import Me from './Pics/me.jpg'

export default function About() {
    return(
        <>
            <section id="header" className="align-items-center page-container">
                <div className="container-fluid content-wrap">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row justify-content-evenly">
                            <div className="col-md-5 col-10 order-1 order-sm-1">
                                <h4>Hello there, my name is</h4>
                                <h1 className="my-3">{""}<strong className="brand-name">Khoa Henry Nguyen</strong></h1>
                                <p>I'm a front-end developer with 4+ years of work experience in IT support, web design, and cloud computing. Frequently praised as detail-oriented, self-starter, and reliable by my peers, I can be relied upon to be a hard-working front-end/React developer.</p>
                                <p>Feel free to {<Link className="brand-name" to="/contact">contact</Link>} me ;)</p>
                                <br/>
                                <h4>{""}<strong className="brand-name">Experiences:</strong></h4>
                                <h6 style={{fontStyle: "italic"}}>i.c. stars, Milwaukee, WI — Software Developer & Technical Analyst of CodeWalkers</h6>
                                <li>July 2020 - November 2020</li>
                                <h6 style={{fontStyle: "italic"}}>Tier1 Gaming Lounge, Milwaukee, WI — General Manager & IT Technician</h6>
                                <li>May 2016 - September 2020</li>
                            </div>
                            <div className="col-md-5 col-10 order-2 order-sm-2" >
                                <h4>I am currently working at</h4>
                                <h1 style={{color:"#3498db"}}>{""}<strong>American Family Insurance</strong></h1>
                                <h4>as an Associate Application Development Engineer.</h4>
                                <img src={Amfam} className="img-fluid animated" alt=""/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}