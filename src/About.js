import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import Me from './me.jpg'

export default function About() {
    return(
        <div>
            <div className="pusher">
                <div className="ui vertical stripe segment">
                    <div className="ui stackable grid container">
            <div className="row" style={{color:'beige', paddingTop:'110px',fontFamily: "Times New Roman"}}>
                <div className="eight wide column">
                    <h4 style={{fontFamily:"Times New Roman"}}>Hello there, my name is</h4>
                    <h1 style={{fontFamily: "Times New Roman"}}>Khoa Henry Nguyen</h1>
                    <p style={{fontFamily:"Times New Roman"}}>
                        jkkkfnklwejklfjwekljfkwfwefjwenfjkhwqejklfhwejkhjknhjwfkejklqjjjjjjjjjjjjjjjjjjjjmnjkfjikwenhjfnwejknfkwemfklwemklfwefwejmfklwejmfkljweklfmwelfwejfklwejmfklwefjklwe,mfcklwvjhweiklvhjqwekfd
                    </p>
                </div>
                <div className="eight wide column">
                    <img src={Me} height="300px" weight="300px" />
                </div>
            </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}