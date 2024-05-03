import React, { useState } from "react";

export default function BookingForm(props) {
   const [date, setDate] = useState("")
   const [times, setTimes] = useState("")
   const [guests, setGuests] = useState("")
   const [occasion, setOccasion] = useState("")
   
   const handleSubmit = (e) => {
      e.preventDefault();
      props.submitForm(e);
   }

   const handleChange = (e) => {
      setDate(e);
      props.dispatch(e);
   }

   return (
      <header>
         <section>
            <form onSubmit={handleSubmit}>
               <fieldset>
                  <div>
                     {/* Date Selection */}
                     <label htmlFor="book-date">Choose Date:</label>
                     <input type="date" id="bookdate" value={date} onChange={(e) => handleChange(e.target.value)} required />
                  </div>
                  <div>
                     {/* Time Selection */}
                     <label htmlFor="book-time">Choose Time:</label>
                     <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                        <option value="">Select a Time</option>
                        {
                           props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                        }
                     </select>
                  </div>
                  <div>
                     {/* Number of Guests */}
                     <label htmlFor="book-guests">Number of Guestes:</label>
                     <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} type="number" placeholder={0}/>
                  </div>
                  <div>
                     {/* Occasion Field */}
                     <label htmlFor="book-occasion">Occasion:</label>
                     <select id="book-occasion"  key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                     </select>
                  </div>
                  <div className="btnReceive">
                     {/* Submit Button */}
                     <input aria-label="On Click" type="submit" value={"Make Your Reservation"}/>
                  </div>
               </fieldset>

            </form>
         </section>
      </header>
   )
}