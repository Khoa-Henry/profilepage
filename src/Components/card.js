import React from 'react';
 

export default function Card(props){
    return(
        <>
        <div className="col-md-4 col-18 card-deck   ">
            <div className="card">
                <img src={props.pic} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </>
    )
}