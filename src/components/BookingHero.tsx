import Footer from './Footer'
import Navbar from './Navbar'
import './BookingHero.css'
function BookingHero() {
  return (
<>
    <div className="hero booking">
      <div className="hero-container">
        <Navbar />
        <section className="hero-container__section">
            <div className="hero-container__text">
                <h1>Reservations</h1>
            <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
            </div>
            <div className="reservation__form">
                <div className="form-group">
            {/* <label htmlFor="fullname">Full Name</label> */}
            <span className="input-wrapper">
              <input type="text" id="fullname" placeholder='Name'/>
            </span>
            <span className="error">
              <p>This field is required</p>
            </span>
          </div>
          <div className="form-group">
            {/* <label htmlFor="email-address">Email Address</label> */}
            <span className="input-wrapper">
              <input
                type="text"
                id="email-address"
                placeholder="Email"
              />
            </span>
            <span className="error">
              <p>This field is required</p>
            </span>
          </div>

          <div className="form-group">

            <span className="input-wrapper">
              <input
                type="text"
                id="email-address"
                placeholder="Email"
              />
            </span>
            <span className="error">
              <p>This field is required</p>
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="submit-button" className="input-wrapper button-wrapper">
              <button id="submit-button"  type="submit">
                Make Reservation
              </button>
            </label>
          </div>
            </div>
        </section>
      </div>
    </div>
    <div className="container container-white-bg container-reservations">
        <div className="wrapper wrapper-reservations">
            
        </div>
    </div>
    <Footer />
</>
  )
}

export default BookingHero