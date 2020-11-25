import React from 'react';
// import {Container} from 'react-bootstrap'
import Card from './Components/card';
import StartReact from './Pics/startreact.png'
import Hooks from './Pics/react-hooks.jpg'
import Paylocity from './Pics/paylocity1.jpg'
import VideoSearch from './Pics/videosearch.png'
import GitHub from './Pics/GitHub.jpeg'

export default function Projects(){
    return(
        <>
        <section id="header">
        <div className="my-5">
            <h1 className="text-center">My Projects</h1>
        </div>
        <div className="page-container">
            <div className="container-fluid md-5 content-wrap">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                            <Card
                                title="Starting a React App Tutorial"
                                description="Taught my fellow interns on how to start a react app in the terminal."
                                pic={StartReact}
                            />
                            <Card
                                title="Paylocity's Mobile App Protype"
                                description="My Team of 4 was assigned to create and re-design the moblie app of Paylocity to increase the value of the compnay by making the app for user-friendly and focus on user engagment."
                                pic={Paylocity}
                            />
                            <Card
                                title="React Hooks Tutorial"
                                description="A video showing the understanding hooks and how to use hooks to create functional compomnents"
                                pic={Hooks}
                            />
                            <Card
                                title="Video Search"
                                description="Using YouTube's API to create a video searcher"
                                pic={VideoSearch}
                            />
                            <Card
                                title="GitHub Tutorial"
                                description="Learned GitHub ahead of time and taught my fellow interns what GitHub is and how to use it."
                                pic={GitHub}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}