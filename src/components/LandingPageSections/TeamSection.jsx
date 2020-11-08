import React from 'react'

export default function TeamSection() {
    return (
        <section className="content-section" id="portfolio">
            <div className="container">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0">Get to know us</h3>
                    <h2 className="mb-5">Team</h2>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="alessio.html">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Alessio</div>
                                    <p className="mb-0">Ops I did it again</p>
                                </div>
                            </div>
                            <img
                                className="img-fluid"
                                src="https://timesofindia.indiatimes.com/thumb/msid-64137580,width-800,height-600,resizemode-4/64137580.jpg?imglength=47128"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="paolo.html">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Paolo</div>
                                    <p className="mb-0">Got you!</p>
                                </div>
                            </div>
                            <img
                                className="img-fluid"
                                src="https://leganerd.com/wp-content/uploads/2018/12/the-batman.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a
                            className="portfolio-item"
                            href="/founder?id=5f9816f845b90832a0dbd06d"
                        >
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Majd</div>
                                    <p className="mb-0">Bring it on</p>
                                </div>
                            </div>
                            <img
                                className="img-fluid"
                                src="https://images.vanityfair.it/wp-content/uploads/2018/09/13113714/cavi1-950x684.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
