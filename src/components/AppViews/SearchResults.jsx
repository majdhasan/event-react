import React from 'react'
import Footer from '../LandingPageSections/Footer'
import NavCustomer from '../NavCustomer'

export default function SearchResults() {
    return (
        <div>
            <NavCustomer />
            <section className="content-section bg-light">
                <div className="container text-center">
                    <h2>Search results for <u>what!</u> in <u>where</u> </h2>
                    <div className="row">
                      
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}