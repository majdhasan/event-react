import React from 'react'
import EventCard from '../AppComponents/EventCard'
import Footer from '../LandingPageSections/Footer'
import NavCustomer from '../NavCustomer'

export default function SearchResults() {
    return (
        <div>
            <NavCustomer></NavCustomer>
            <section class="content-section bg-light" id="about">
                <div class="container text-center">
                    <h2>Search results for <u>What!</u> in <u>Where</u> </h2>
                    <div class="row">
                        <EventCard />
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
