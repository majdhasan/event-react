import axios from 'axios';
import React, { useState, useEffect , useRef } from 'react';
import EventCardMaterial from '../AppComponents/EventCardMaterial'
import Footer from '../LandingPageSections/Footer'
import NavCustomer from '../NavCustomer'
import Cookies from 'js-cookie'
import { getEvents, deleteEvent, getUser } from '../../http-common'
import { Redirect } from "react-router-dom";


import AlertDialogSlide from '../AppComponents/AlertDialogSlide'
import LoadingCircle from '../AppComponents/LoadingCircle';


export default function Home() {


    const [user, setUser] = useState();
    const [loggedOut, setLoggedOut] = useState(false);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const tokenRef = useRef("");
    

    useEffect(() => {
        setLoading(true)
        tokenRef.current = Cookies.get('token')
        axios.get(`http://localhost:4000/api/v1/test`, {
            headers: { Authorization: `Bearer ${tokenRef.current}` }
        })
            .then(res => {
                setUser(res.data.user)
                axios.get(
                    `http://localhost:4000/api/v1//event`,
                    {
                        headers: { Authorization: `Bearer ${tokenRef.current}` }
                    }
                ).then(response => {
                    setEvents(response.data)
                    setLoading(false)
                })
            })
            .catch(err => {
                console.log("Failed sorry: try again" + err);
            })

    }, []);

    const handleLogout = () => {
        setUser(null)
        setEvents([])
        Cookies.remove('token')
        setLoggedOut(true);
    }

    const handleDeleteEvent = (id) => {
        deleteEvent(id).then(res => {
            if (res.status === 200) getEvents().then(res => { setEvents(res) })
        })
    }

    if (loggedOut) {
        return <Redirect to={'/'} />
    } else if (typeof Cookies.get('token') === 'undefined') {
        return <Redirect to={'/login'} />
    }
    else {
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
                                    <p>You have <b>{user && user.pendingInvites}</b> pending invites</p>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-12 col-sm-12 col-sx-12 ml-auto">
                                <a href="/new-event">
                                    <button
                                        className="btn btn-primary btn-lg btn-dark btn-home"
                                        type="button">Create an Event</button></a>

                                <AlertDialogSlide
                                    btnClass={"btn btn-primary btn-lg btn-dark btn-home"}
                                    btnContent={"Log out"}
                                    title={"Are you sure?"}
                                    content={"Press agree to logout"}
                                    onConfirm={handleLogout}
                                />
                            </div>
                        </div>
                        <hr />

                        <h4 className={"homeSubheadline"} >Your upcoming Events</h4>
                        <div className="row">
                            {loading && <LoadingCircle></LoadingCircle>}
                            {events && events.map((event, index) => {
                                return (
                                    <EventCardMaterial handleDeleteEvent={handleDeleteEvent} key={index} event={event} />)

                            })}
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        )
    }
}
