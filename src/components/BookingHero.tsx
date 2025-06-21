import './BookingHero.css'
import Footer from './Footer'
import Navbar from './Navbar'
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