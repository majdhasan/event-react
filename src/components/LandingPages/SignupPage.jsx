import React from 'react'
import Footer from '../LandingPageSections/Footer'
import Login from '../Login'
import NavCustomer from '../NavCustomer'
import Signup from '../Signup'

export default function SignupPage() {
    return (
        <div>
            <NavCustomer></NavCustomer>
            <Signup></Signup>
            <Footer></Footer>
        </div>
    )
}
