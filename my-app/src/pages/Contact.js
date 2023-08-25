import React from "react";



function Contact() {
    return(
        <>
        <section className="contact py-5" id="contact">
        <div className="container py-5">
            <h1 className="text-center title">Contact Me</h1>
            <div id="err-message"></div>
            <div className="row py-5">
                <div className="col-lg-10 mx-auto">
                    <div className="row text-center">
                        <div className="col-lg-4">
                            <div className="circle">
                                <span><i className="fa-sharp fa-solid fa-envelope "></i></span>
                            </div>
                            <h5 className="text-decoration-none"><a href="mailto:aidayeli15@gmail.com">Email</a></h5>
                        </div>
                        <div className="col-lg-4">
                            <div className="circle">
                                <span><i className="fa-solid fa-phone "></i></span>
                            </div>
                            <h5><a href="tel:475-434-3477">Number</a></h5>
                        </div>
                        <div className="col-lg-4">
                            <div className="circle">
                                <span><i className="fa-brands fa-linkedin "></i></span>
                            </div>
                            <h5><a href="https://www.linkedin.com/in/aida-tavarez/" target="_blank">LinkedIn</a></h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-9 mx-auto">
                    <form id="myform" name="myForm" method="post" action="#">
                        <div className="form-row">
                            <div className="col-lg-12">
                                <input type="text" id="name" name="name" minlength="2"
                                className="form-control bg-light mb-3" placeholder="Name" />
                            </div>
                            <div className="col-lg-12">
                                <input type="text" name="subject" className="form-control bg-light mb-3"
                                placeholder="Subject" id="subject" required />
                            </div>
                            <div className="col-lg-12">
                                <input type="email" name="email" className="form-control bg-light mb-3" placeholder="Email"
                                required />
                            </div>
                            <div className="col-lg-12">
                                <input type="tel" name="phone" className="form-control bg-light mb-3" placeholder="Phone"
                                id="phone" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-12">
                                <textarea name="" id="massage" className="form-control bg-light"
                                placeholder="Message" cols="30" rows="10" required></textarea>
                            </div>
                        </div>
                        <input className="btn3 m-4" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
        
    </section>
        </>
    )
}

export default Contact;