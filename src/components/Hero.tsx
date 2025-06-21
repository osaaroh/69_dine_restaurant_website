import './Hero.css'
import Navbar from './Navbar'
import { Link, NavLink } from 'react-router-dom';
function Hero() {
  return (

    <div className="hero">
      <div className="hero-container">
        <Navbar />
        <section className="hero-container__section">
            <div className="hero-container__text">
                <h1>Exquisite dining since 1989</h1>
            <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
            <Link to='/booking'> <button className="cta-button">Book a Table</button></Link>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Hero