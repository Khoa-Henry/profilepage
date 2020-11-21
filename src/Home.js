import React from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Home() {
    return(
        <Container fluid>
        <div style={{paddingTop:'200px',paddingLeft:'100px',paddingRight:'100px'}}>
            <h1 style={{fontWeight: "10000",fontFamily: "Times New Roman", color:'beige', fontSize:'45px'}} className="ui huge header">Hello, I'm an Associate Application Developer Engineer at American Family Insurance</h1>
            <p style={{fontFamily: "Times New Roman", color: 'beige'}} className="ui medium header">
                Currently working remotely from Milwakuee, WI
            </p>
            <Link to="/projects"><button className="ui large primary button" style={{fontFamily: "Times New Roman"}}>Explore Projects</button></Link>
            <Link to="/about"><button className="ui large button" style={{fontFamily: "Times New Roman"}}>About Me</button></Link>
        </div>
        </Container>
    )
}