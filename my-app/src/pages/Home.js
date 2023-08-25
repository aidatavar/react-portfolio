import React from "react";

function Home() {
    return(
        <>
        <section className="main justify-content-center py-5">
        <div className="container py-5 ">
            <div className="row py-5">
                <div className="col-lg-7 py-5">
                    <h3 className="title">
                        <small>Hello, I am</small><br />
                        Aida
                    </h3>
                    <h6 className="pt-3">Web Developer</h6>
                    <input type="button" value="My Work" className="bt1 mt-5 mrr-3" />
                    <input type="button" value="Hire Me" className="bt2 mt-5" />
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Home