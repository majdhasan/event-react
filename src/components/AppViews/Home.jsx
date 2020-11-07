import React from 'react'
import EventCard from '../AppComponents/EventCard'

export default function Home() {
    return (
        <div>
            <section class="content-section bg-light">
                <div class="container text-center">
                    <div class="row">
                        <div class="col col-lg-2 col-md-12 col-sm-12 col-sx-12 col-sx-12">
                            <img
                                class="event-avatar d-block mx-auto mx-md-0"
                                src="https://media-exp1.licdn.com/dms/image/C5603AQHpBr_qJDHjpw/profile-displayphoto-shrink_400_400/0?e=1609372800&amp;v=beta&amp;t=SzHK75ycpvj542YP57KjMICFkWqXmMAwNmPR9d05uus"
                                alt=""
                            />
                        </div>
                        <div class="col col-lg-6 col-md-12 col-sm-12 col-sx-12">
                            <div class="row">
                                <h1>Hi Majd Hasan</h1>
                            </div>
                            <div class="row">
                                <p>You have <b>0</b> pending invites</p>
                            </div>
                        </div>
                        <div class="col col-lg-3 col-md-12 col-sm-12 col-sx-12 ml-auto">
                            <a href="/event/new"
                            ><button
                                class="btn btn-primary btn-lg btn-dark btn-home"
                                type="button"
                                name="button"
                            >
                                    +
          </button></a>

                            <a href="/logout"
                            ><button
                                class="btn btn-primary btn-lg btn-dark btn-home"
                                type="button"
                                name="button"
                            >
                                    Logout
          </button></a>
                        </div>
                    </div>
                    <hr />

                    <h4>Your upcoming Events</h4>
                    <div class="row">
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
