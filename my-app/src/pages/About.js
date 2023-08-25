import React from "react";

function About() {
    return(
        <>
        <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <img src="https://www.viewbug.com/media/mediafiles/2015/11/12/60382097_large.jpg" className="img-fluid" id="image" alt="" />
                </div>
                <div className="col-lg-7">
                    <h1 className="title">About Me</h1>
                    <p className="title">WEB DEVELOPER</p>
                    <p className="py-3">Lorem <span className="font-weight-bold">Aida Tavarez</span> ipsum dolor sit amet
                        consectetur adipisicing elit. Doloribus dicta eos dignissimos quas odit commodi rem libero nobis
                        corrupti impedit?</p>

                    <div className="progress my-3">
                        <div className="pro-value1">
                            <p>HTML / CSS <span className="text-white float-right">95%</span></p>
                        </div>
                    </div>

                    <div className="progress my-3">
                        <div className="pro-value2">
                            <p>JAVASCRIPT<span className="text-white float-right">85%</span></p>
                        </div>
                    </div>

                    <div className="progress my-3">
                        <div className="pro-value3">
                            <p>BOOTSTRAP <span className="text-white float-right">80%</span></p>
                        </div>
                    </div>

                    <div className="progress my-3">
                        <div className="pro-value4">
                            <p>MYSQL<span className="text-white float-right">30%</span></p>
                        </div>
                    </div>
                    <div className="progress my-3">
                        <div className="pro-value5">
                            <p>GIT<span className="text-white float-right">98%</span></p>
                        </div>
                    </div>


                    <button className="btn1 mt-5"><a href="../resume/Aida-Tavarez.pdf">Download C.V</a>
                    </button>
                    <input type="button" className="btn2 mt-5" value="Contact Me" />

                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default About;