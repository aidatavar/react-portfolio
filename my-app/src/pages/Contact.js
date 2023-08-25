import React from "react";



function Contact() {
    return(
        <>
        <section class="contact py-5" id="contact">
        <div class="container py-5">
            <h1 class="text-center title">Contact Me</h1>
            <div id="err-message"></div>
            <div class="row py-5">
                <div class="col-lg-10 mx-auto">
                    <div class="row text-center">
                        <div class="col-lg-4">
                            <div class="circle">
                                <span><i class="fa-sharp fa-solid fa-envelope "></i></span>
                            </div>
                            <h5 class="text-decoration-none"><a href="mailto:aidayeli15@gmail.com">Email</a></h5>
                        </div>
                        <div class="col-lg-4">
                            <div class="circle">
                                <span><i class="fa-solid fa-phone "></i></span>
                            </div>
                            <h5><a href="tel:475-434-3477">Number</a></h5>
                        </div>
                        <div class="col-lg-4">
                            <div class="circle">
                                <span><i class="fa-brands fa-linkedin "></i></span>
                            </div>
                            <h5><a href="https://www.linkedin.com/in/aida-tavarez/" target="_blank">LinkedIn</a></h5>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-9 mx-auto">
                    <form id="myform" name="myForm" method="post" action="#">
                        <div class="form-row">
                            <div class="col-lg-6">
                                <input type="text" id="name" name="name" minlength="2"
                                    class="form-control bg-light mb-3" placeholder="Name" />

                            </div>
                            <div class="col-lg-6">
                                <input type="text" name="subject" class="form-control bg-light mb-3"
                                    placeholder="Subject" id="subject" required />

                            </div>
                            <div class="col-lg-6">
                                <input type="email" name="email" class="form-control bg-light mb-3" placeholder="Email"
                                    required />

                            </div>
                            <div class="col-lg-6">
                                <input type="tel" name="phone" class="form-control bg-light mb-3" placeholder="Phone"
                                    id="phone" required />

                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-12">
                                <textarea name="" id="massage" class="form-control bg-light"
                                    placeholder="Message" cols="30" rows="10" required></textarea>

                            </div>
                        </div>
                        <input class="btn3 m-4" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
        
    </section>
        </>
    )
}

export default Contact;