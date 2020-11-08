import React from 'react'
import Footer from '../LandingPageSections/Footer'
import NavCustomer from '../NavCustomer'

export default function NewEvent() {
  return (

    <div>
      <NavCustomer></NavCustomer>

       <section className="content-section bg-light">
         <div className="container text-center">
           <div className="row">
             <div className="col-lg-10 mx-auto">
               <h2>Create an Event</h2>
               <form className="new-event-form" method="POST" action="/event">
                 <div className="form-group">
                   <input
                     placeholder="Title"
                     id="title"
                     name="title"
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
                       name="eventType"
                       className="custom-control-input"
                     />
                     <label className="custom-control-label" htmlFor="public">Public</label>
                   </div>
                   <div className="custom-control custom-radio custom-control-inline">
                     <input
                       type="radio"
                       id="private"
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
                       id="inputCity"
                     />
                   </div>
                   <div className="form-group col-md-4 address-input">
                     <input
                       name="zip"
                       placeholder="Zip"
                       type="text"
                       className="form-control"
                       id="inputZip"
                     />
                   </div>
                 </div>

                 <div className="form-group">
                   <label htmlFor="date">Date</label>
                   <input id="date" name="date" type="date" className="form-control" required />
                 </div>

                 <div className="form-group">
                   <textarea
                     placeholder="Looking for"
                     id="lookingFor"
                     name="lookingFor"
                     cols="40"
                     rows="3"
                     className="form-control"
                   ></textarea>
                 </div>

                 <div className="form-group">
                   <button name="submit" type="submit" className="btn btn-primary">Create</button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </section >
      <Footer></Footer>
    </div>
  )
}
