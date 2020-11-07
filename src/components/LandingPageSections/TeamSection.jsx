import React from 'react'

export default function TeamSection() {
    return (
        <section class="content-section" id="portfolio">
            <div class="container">
                <div class="content-section-heading text-center">
                    <h3 class="text-secondary mb-0">Get to know us</h3>
                    <h2 class="mb-5">Team</h2>
                </div>
                <div class="row no-gutters">
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="alessio.html">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Alessio</div>
                                    <p class="mb-0">Ops I did it again</p>
                                </div>
                            </div>
                            <img
                                class="img-fluid"
                                src="https://timesofindia.indiatimes.com/thumb/msid-64137580,width-800,height-600,resizemode-4/64137580.jpg?imglength=47128"
                                alt=""
                            />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="paolo.html">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Paolo</div>
                                    <p class="mb-0">Got you!</p>
                                </div>
                            </div>
                            <img
                                class="img-fluid"
                                src="https://leganerd.com/wp-content/uploads/2018/12/the-batman.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a
                            class="portfolio-item"
                            href="/founder?id=5f9816f845b90832a0dbd06d"
                        >
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Majd</div>
                                    <p class="mb-0">Bring it on</p>
                                </div>
                            </div>
                            <img
                                class="img-fluid"
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
