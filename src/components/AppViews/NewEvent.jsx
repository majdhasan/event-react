import React, { useState } from 'react'
import Footer from '../LandingPageSections/Footer'
import NavCustomer from '../NavCustomer'
import { addNewEvent } from '../../http-common'

export default function NewEvent() {

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    street: "",
    city: "",
    zip: "",
    eventType: "",
    country: "",
    date: "",
    lookingFor: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [missingInput, setMissingInput] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewEvent((prevValue) => {
      return (
        {
          ...prevValue,
          [name]: value
        }
      )
    })
  }

  const handleSubmit = () => {
    
    addNewEvent(newEvent).then(res => {
      if (res.status === 200) setSubmitted(true)
    });

  }

  if (submitted) {
    return (

      <div>
        <NavCustomer></NavCustomer>
        <section className="content-section bg-light">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2>Your new event have been created</h2>
              </div>
              <button class="btn btn-primary btn-lg btn-dark btn-home" type="button">Go back to Home</button>
              <button class="btn btn-primary btn-lg btn-dark btn-home" type="button">Create another Event</button>
            </div>
          </div>
        </section >
        <Footer></Footer>
      </div>
    )
  } else {
    return (
      <div>
        <NavCustomer></NavCustomer>

        <section className="content-section bg-light">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2>Create an Event</h2>
               { missingInput && <p style={{color:"red"}}>please fill missing fields</p>}
                <div className="form-group">
                  <input
                    placeholder="Title"
                    id="title"
                    name="title"
                    onChange={handleChange}
                    type="text"
                    required="required"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Description"
                    id="description"
                    name="description"
                    onChange={handleChange}
                    cols="40"
                    rows="5"
                    required="required"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="public"
                      value="public"
                      onChange={handleChange}
                      name="eventType"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor="public">Public</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="private"
                      onChange={handleChange}
                      value="private"
                      name="eventType"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor="private">Private</label>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    name="street"
                    placeholder="Address"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-8 address-input">
                    <input
                      name="city"
                      placeholder="City"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-4 address-input">
                    <input
                      name="zip"
                      placeholder="Zip"
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="inputZip"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input onChange={handleChange} id="date" name="date" type="datetime-local" className="form-control" required />
                </div>

                <div className="form-group">
                  <textarea
                    placeholder="Looking for"
                    id="lookingFor"
                    name="lookingFor"
                    onChange={handleChange}
                    cols="40"
                    rows="3"
                    className="form-control"
                  ></textarea>
                </div>

                <div className="form-group">
                  <button onClick={handleSubmit} className="btn btn-primary">Create</button>
                </div>

              </div>
            </div>
          </div>
        </section >
        <Footer></Footer>
      </div>
    )
  }

}
