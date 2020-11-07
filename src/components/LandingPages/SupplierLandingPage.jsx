import React from 'react'
import NavSupplier from '../NavSupplier'
import AboutSection from '../LandingPageSections/AboutSection'
import CalloutSection from '../LandingPageSections/CalloutSection'
import ServicesSection from '../LandingPageSections/ServicesSection'
import TeamSection from '../LandingPageSections/TeamSection'
import SupplierHeader from '../LandingPageSections/SupplierHeader'
import Footer from '../LandingPageSections/Footer'

export default function SupplierLandingPage() {
    return (
        <div>
            <NavSupplier></NavSupplier>
            <SupplierHeader></SupplierHeader>
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
            <CalloutSection></CalloutSection>
            <TeamSection></TeamSection>
       <Footer></Footer>
        </div>
    )
}