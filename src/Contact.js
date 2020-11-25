import React from 'react';


export default function Contact() {
    return(
        <>
        <section id="header">
            <div className="my-5">
                <h1 className="text-center">Contact Me</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                        <label for="validationDefault01">First name</label>
                        <input type="text" className="form-control" id="validationDefault01" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                        <label for="validationDefault02">Last name</label>
                        <input type="text" className="form-control" id="validationDefault02" required/>
                        </div>
                    </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" required rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-get-started">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}