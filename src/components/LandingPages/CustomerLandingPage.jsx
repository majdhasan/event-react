import React from 'react'
import AboutSection from '../LandingPageSections/AboutSection'
import CalloutSection from '../LandingPageSections/CalloutSection'
import NavCustomer from '../NavCustomer'
import ServicesSection from '../LandingPageSections/ServicesSection'
import TeamSection from '../LandingPageSections/TeamSection'
import Footer from '../LandingPageSections/Footer'


export default function CustomerHeader() {
    return (
        <div>
            <NavCustomer />
            <header className="masthead d-flex">
                <div className="container text-center my-auto">
                    <h1 className="mb-1">More than just an event planner!</h1>
                    <h3 className="mb-5">
                        <em></em>
                    </h3>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="/signup"
                    >Start your journey today!</a
                    >
                </div>
                <div className="overlay"></div>
            </header>
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
            <CalloutSection></CalloutSection>
            <TeamSection></TeamSection>
            <Footer></Footer>
        </div>
    )
}
