import React from 'react'

export default function ServicesSection() {
    return (
        <section
            className="content-section bg-primary text-white text-center"
            id="features"
        >
            <div className="container">
                <div className="content-section-heading">
                    <h3 className="text-secondary mb-0">Services</h3>
                    <h2 className="mb-5">What We Offer</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="icon-map"></i>
                        </span>
                        <h4>
                            <strong>Find suppliers</strong>
                        </h4>
                        <p className="text-faded mb-0">
                            We connect you with the right supplier for <em>you</em>!
              </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="icon-event"></i>
                        </span>
                        <h4>
                            <strong>Plan your event</strong>
                        </h4>
                        <p className="text-faded mb-0">
                            We help you to plan you event from A to Z.
              </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="icon-speech"></i>
                        </span>
                        <h4>
                            <strong>Communicate with your guests</strong>
                        </h4>
                        <p className="text-faded mb-0">
                            We make the communication with your guests as clear and easy as it
                            could get
              </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
