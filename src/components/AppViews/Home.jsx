import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EventCard from '../AppComponents/EventCard'
import EventCardMaterial from '../AppComponents/EventCardMaterial'

import Footer from '../LandingPageSections/Footer'
import NavCustomer from '../NavCustomer'

export default function Home() {

    const [user, setUser] = useState();

    useEffect(() => {

        axios.get(`http://localhost:3000/api/v1/loggedUser`)
            .then(res => {
                console.log(res);
                res.status === 200 && setUser(res.data)
            })
            .catch(err => {
                console.log("Failed sorry: try again" + err);
            })
    });
    return (
        <div>
            <NavCustomer></NavCustomer>
            <section className="content-section bg-light">
                <div className="container text-center">
                    <div className="row">
                        <div className="col col-lg-2 col-md-12 col-sm-12 col-sx-12 col-sx-12">
                            <img
                                className="event-avatar d-block mx-auto mx-md-0"
                                src="https://media-exp1.licdn.com/dms/image/C5603AQHpBr_qJDHjpw/profile-displayphoto-shrink_400_400/0?e=1609372800&amp;v=beta&amp;t=SzHK75ycpvj542YP57KjMICFkWqXmMAwNmPR9d05uus"
                                alt=""
                            />
                        </div>
                        <div className="col col-lg-6 col-md-12 col-sm-12 col-sx-12">
                            <div className="row">
                                <h1>Hi {user && (user.firstname + " " + user.lastname)}</h1>
                            </div>
                            <div className="row">
                                <p>You have <b>0</b> pending invites</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-12 col-sm-12 col-sx-12 ml-auto">
                            <a href="/new-event"
                            ><button
                                className="btn btn-primary btn-lg btn-dark btn-home"
                                type="button"
                                name="button"
                            >
                                    +
          </button></a>

                            <a href="/logout"
                            ><button
                                className="btn btn-primary btn-lg btn-dark btn-home"
                                type="button"
                                name="button"
                            >
                                    Logout
          </button></a>
                        </div>
                    </div>
                    <hr />

                    <h4>Your upcoming Events</h4>
                    <div className="row">
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCardMaterial></EventCardMaterial>
                        <EventCardMaterial></EventCardMaterial>
                        <EventCardMaterial></EventCardMaterial>
                        <EventCardMaterial></EventCardMaterial>
                        <EventCardMaterial></EventCardMaterial>

                        <EventCardMaterial></EventCardMaterial>

                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
