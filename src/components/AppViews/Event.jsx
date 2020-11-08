import React from 'react'
import Footer from '../LandingPageSections/Footer'
import NavCustomer from '../NavCustomer'
import Comment from '../AppComponents/Comment'

export default function Event() {
    return (
        <div>
            <NavCustomer></NavCustomer>
            <section className="content-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-5 col-sm-5 col-sx-12">
                            <img
                                className="event-avatar d-block mx-auto mx-md-0"
                                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                alt=""
                            />
                        </div>
                        <div className="col col-lg-9 col-md-7 col-sm-7 col-sx-12">
                            <div className="row">
                                <h1>Event title</h1>
                                <form
                                    className="ml-auto"
                                    action="/invite/new/<%- event._id %> "
                                    method="GET"
                                >
                                    <button className="btn btn-primary">Send an Invite</button>
                                </form>
                            </div>
                            <div className="row">
                                <b>Event Date</b>
                            </div>
                            <div className="row">Event Adrress </div>
                            <div className="row">
                                <i className="fas fa-lock-alt"></i>
                                <i className="fas fa-unlock-alt"></i>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <h4>Description</h4>
                            <p>Event Body</p>
                            <h4>Invites</h4>
                            <ul>
                                <li><a href="/invite?id=<%- invite %>">Invite ID</a></li>
                            </ul>
                            <hr />
                            <h4>Looking For</h4>
                            <p>What are you looking for</p>
                        </div>
                    </div>

                    <hr />
                    <section id="comments">
                        <div className="row">
                            <div className="col-sm-8">
                                <form action="/comment?id=<%- event._id %> " method="POST">
                                    <h4 className="new-comment">New Comment</h4>
                                    <fieldset>
                                        <div className="row">
                                            <div className="form-group col-xs-12 col-sm-12 col-lg-12">
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="content"
                                                    placeholder="Your message"
                                                    required=""
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                </button>
                                        </div>
                                    </fieldset>
                                </form>
                                <h4>1 Comment</h4>
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                                
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
