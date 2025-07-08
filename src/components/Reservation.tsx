import { Link } from 'react-router-dom'
import './Reservation.css'
function Reservation() {
  return (
    <div>
        <div className="container container-reservation">
          <div className="wrapper wrapper_flex wrapper-reservation">
            <h2>Ready to make a reservation?</h2>
            <Link to='/booking'> <button className="cta-button">Book a Table</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Reservation