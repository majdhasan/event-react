import React from 'react'

export default function EventCard() {
    return (
        <div class="col col-lg-3 col-md-6 col-sm-12">
            <div class="event">
                <a href="/event?id=eventId">
                    <img
                        src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt=""
                    />
                    <h1>Event Title</h1>
                    <p>Date of the Event</p>
                    <p>Event Description</p>
                    <hr />
                </a>
            </div>
        </div>

    )
}
