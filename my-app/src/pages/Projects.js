import React from "react";



function Projects() {
    return(
        <>
            <section className="portfolio py-5" id="portfolio">
        <div className="container text-center py-5">
            <h1 className="text-center font-weight-bold pb-5 title">Portfolio</h1>
            <div className="control">
                <ul>
                    <li className="button">My Work</li>
                </ul>
            </div>

            <div className="row pt-3">
                <div className="col-lg-4">
                    <div className="item">
                        <img src={require('../img/project-img-1.png')} className="item-image" alt="" />
                        <div className="item-body">
                            <h1 className="item-title font-weight-bold">css flexbox photo gallery</h1>
                            <p className="item-info ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias et
                                officia quod nulla, vel facilis ab impedit, non ad beatae quam obcaecati eos minus ut
                                eaque accusamus soluta deleniti autem.</p>

                            <button className="item-btn1 text-decoration-none"><a
                                    href="https://codepen.io/aidatr/full/ZEqRvwM" target="_blank">Page View</a></button>
                            <button className="item-btn2 text-decoration-none"><a
                                    href="https://codepen.io/aidatr/full/ZEqRvwM"
                                    target="_blank"></a>CodePen</button>
                        </div>
                    </div>
                </div>



                <div className="col-lg-4" id="project">
                    <div className="item">
                        <img src={require('../img/project-img-2.png')} className="item-image" alt="" />
                        <div className="item-body">
                            <h1 className="item-title font-weight-bold">PROJECT</h1>
                            <p className="item-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias et
                                officia quod nulla, vel facilis ab impedit, non ad beatae quam obcaecati eos minus ut
                                eaque accusamus soluta deleniti autem.</p>

                            <button className="item-btn1 text-decoration-none"><a
                                    href="https://codepen.io/aidatr/full/zYmpjZx" target="_blank">Page View</a></button>
                            <button className="item-btn2 text-decoration-none"><a
                                    href="https://codepen.io/aidatr/pen/zYmpjZx"
                                    target="_blank"></a>CodePen</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="item">
                        <img src={require('../img/fill-in-imag1.jpeg')} className="item-image" alt="" />
                        <div className="item-body">
                            <h1 className="item-title font-weight-bold">PROJECT</h1>
                            <p className="item-info ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias et
                                officia quod nulla, vel facilis ab impedit, non ad beatae quam obcaecati eos minus ut
                                eaque accusamus soluta deleniti autem.</p>

                            <button className="item-btn1">live link</button>
                            <button className="item-btn2">git hub</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row pt-3">
                <div className="col-lg-4">
                    <div className="item">
                        <img src={require('../img/fill-in-imag2.avif')} className="item-image" alt="" />
                        <div className="item-body">
                            <h1 className="item-title font-weight-bold">PROJECT</h1>
                            <p className="item-info ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias et
                                officia quod nulla, vel facilis ab impedit, non ad beatae quam obcaecati eos minus ut
                                eaque accusamus soluta deleniti autem.</p>

                            <button className="item-btn1">live link</button>
                            <button className="item-btn2">git hub</button>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4">
                    <div className="item">
                        <img src={require('../img/fill-in-imag5.jpeg')} className="item-image" alt="" />
                        <div className="item-body">
                            <h1 className="item-title font-weight-bold">PROJECT</h1>
                            <p className="item-info ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias et
                                officia quod nulla, vel facilis ab impedit, non ad beatae quam obcaecati eos minus ut
                                eaque accusamus soluta deleniti autem.</p>

                            <button className="item-btn1">live link</button>
                            <button className="item-btn2">git hub</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="item">
                        <img src={require('../img/fill-in-imag6.jpeg')} className="item-image" alt="" />
                        <div className="item-body">
                            <h1 className="item-title font-weight-bold">PROJECT</h1>
                            <p className="item-info ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias et
                                officia quod nulla, vel facilis ab impedit, non ad beatae quam obcaecati eos minus ut
                                eaque accusamus soluta deleniti autem.</p>

                            <button className="item-btn1">live link</button>
                            <button className="item-btn2">git hub</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

        </>
    )
}

export default Projects;