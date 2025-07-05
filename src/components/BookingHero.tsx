import Footer from './Footer'
import Navbar from './Navbar'
import './BookingHero.css'
import { useState } from 'react'

//const ReservationForm: React.FC = () => {
function BookingHero() {
  const [dropdownStateOpen, setDropdownStateOpen] = useState(false);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [time, setTime] = useState('AM');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [dayError, setDayError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [hourError, setHourError] = useState(false);
  const [minuteError, setMinuteError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const incrementNumOfPeople=()=>{
    numOfPeople<100?setNumOfPeople(prev=>prev+1):100
  }
  const decrementNumOfPeople=()=>{
    numOfPeople>1?setNumOfPeople(prev=>prev-1):1
  }
  interface FormData {
  fullname: string;
  emailAddress: string;
  month: string;
  day: string;
  year: string;
  hour: string;
  minute: string;
  numOfPeople: number;
}

  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    emailAddress: '',
    month: '',
    day: '',
    year: '',
    hour: '',
    minute: '',
    numOfPeople: 1
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset all errors
    setNameError(false);
    setEmailError(false);
    setMonthError(false);
    setDayError(false);
    setYearError(false);
    setDateError(false);
    setTimeError(false);
    setHourError(false);
    setMinuteError(false);


    let hasError = false;

    if (!formData.fullname) {
      setNameError(true);
      hasError = true;
    }
    if (!formData.emailAddress) {
      setEmailError(true);
      hasError = true;
    }
    if (!formData.month) {
      setMonthError(true);
      hasError = true;
    }
    if (!formData.day) {
      setDayError(true);
      hasError = true;
    }
    if (!formData.year) {
      setYearError(true);
      hasError = true;
    }
    if (!formData.day || !formData.month || !formData.year) {
      setDateError(true);
      hasError = true;
    }
    if (!formData.hour) {
      setHourError(true);
      hasError = true;
    }
    if (!formData.minute) {
      setMinuteError(true);
      hasError = true;
    }

    if (!formData.hour || !formData.minute) {
      setTimeError(true);
      hasError = true;
    }

    if (!hasError) {
      console.log('Form Submitted!', formData);
      // Here you would typically send data to an API
    }
  };
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
            <form className="reservation__form" name='reservation__form' onSubmit={(e)=>{
              e.preventDefault();
              handleSubmit(e);
            }}
              >
                <div className="form-group">
            {/* <label htmlFor="fullname">Full Name</label> */}
            <span className="input-wrapper">
              <input type="text" id="fullname" name="fullname" placeholder='Name' className={`${nameError?'errorInput':''}`}
              value={formData.fullname}
              onChange={handleChange}/>
            </span>
            <span className="error">
              <p className={`${nameError?'visible':'hide'}`}>This field is required</p>
            </span>
                </div>
                <div className="form-group">
                  {/* <label htmlFor="email-address">Email Address</label> */}
                  <span className="input-wrapper">
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      placeholder="Email"
                      className={`${emailError?'errorInput':''}`}
                      onChange={handleChange}
                      value={formData.emailAddress}
                      
                    />
                  </span>
                  <span className="error">
                    <p className={`${emailError?'visible':'hide'}`}>This field is required</p>
                  </span>
                </div>

                <div className="form-legend form-legend__date">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-wrapper">
                        <p>Pick a date</p>
                      </span>
                      <span className="error">
                        <p className={`${dateError?'visible':'hide'}`}>This field is incomplete</p>
                      </span>
                    </div>
                    <div className="form-fields">
                      <div className="input-group">
                      <span className="input-wrapper">
                        <input
                          type="text"
                          id="month"
                          name="month"
                          placeholder="MM"
                          maxLength={2}
                          className={`${monthError?'errorInput':''}`}
                          value={formData.month}
                          onChange={handleChange}
                        />
                      </span>
                    </div>
                    <div className="input-group">
                      <span className="input-wrapper">
                        <input
                          type="text"
                          id="day"
                          name='day'
                          placeholder="DD"
                          maxLength={2}
                          className={`${dayError?'errorInput':''}`}
                          value={formData.day}
                          onChange={handleChange}
                        />
                      </span>
                    </div>
                    <div className="input-group">
                      <span className="input-wrapper">
                        <input
                          type="text"
                          id="year"
                          name='year'
                          placeholder="YYYY"
                          maxLength={4}
                          className={`${yearError?'errorInput':''}`}
                          value={formData.year}
                          onChange={handleChange}
                        />
                      </span>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="form-legend form-legend__time">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-wrapper">
                        <p>Pick a time</p>
                      </span>
                      <span className="error">
                        <p className={`${timeError?'visible':'hide'}`}>This field is incomplete</p>
                      </span>
                    </div>
                    <div className="form-fields">
                      <div className="input-group">
                      <span className="input-wrapper">
                        <input
                          type="text"
                          id="hour"
                          name="hour"
                          placeholder="09"
                          maxLength={2}
                          value={formData.hour}
                          onChange={handleChange}
                          className={`${hourError?'errorInput':''}`}
                        />
                      </span>
                    </div>
                    <div className="input-group">
                      <span className="input-wrapper">
                        <input
                          type="text"
                          id="minute"
                          name='minute'
                          placeholder="00"
                          maxLength={2}
                          value={formData.minute}
                          onChange={handleChange}
                          className={`${minuteError?'errorInput':''}`}
                        />
                      </span>
                    </div>
                    {/* <div className="input-group">
                      <span className="input-wrapper">
                        <select>
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </select>
                      </span>
                    </div> */}
                    <div className="dropdown-container">
                      <div className="dropdown dropdown--meridiem" id="dropdown-trigger" onClick={()=>{
                        setDropdownStateOpen(!dropdownStateOpen)
                      }}>
                        <div id="selected-meridiem" className="dropdown__selected">{time}</div>
                        <div className="dropdown__arrow" id="dropdown-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="11"><path fill="none" stroke="#9E7F66" stroke-width="2" d="M1 1l8 8 8-8"></path></svg>
                        </div>
                        <div className={`dropdown__items ${dropdownStateOpen?'open':''}`} id="dropdown-menu">
                          <div className="dropdown__item" onClick={()=>setTime('AM')}>
                            <svg className={`dropdown__item__checkmark ${time == 'AM'?'checked':''}`} xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#9E7F66" stroke-width="2" d="M1 5.897l2.767 2.767L11.432 1"></path></svg>
                            <p className="t-form t-form--regular">AM</p>
                          </div>
                          <div className="dropdown__item" onClick={()=>setTime('PM')}>
                            <svg className={`dropdown__item__checkmark ${time == 'PM'?'checked':''}`} xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#9E7F66" stroke-width="2" d="M1 5.897l2.767 2.767L11.432 1"></path></svg>
                            <p className="t-form t-form--regular">PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="form-group form__number-picker">
                  <button className="number-picker__button" id="minus" onClick={()=>decrementNumOfPeople()}>
                    <span className="screen-reader-only">minus</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="3"><path fill="#9E7F66" d="M6.425 2.977V.601H.629v2.376z"></path></svg>
                  </button>
                  <p id="number-of-people"><span>{numOfPeople}</span> {numOfPeople>1?'people':'person'}</p>
                  <button className="number-picker__button" id="plus" onClick={()=>incrementNumOfPeople()}>
                    <span className="screen-reader-only">plus</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11"><path fill="#9E7F66" d="M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z"></path></svg>
                  </button>
              </div>

                <div className="form-group">
                  <label htmlFor="submit-button" className="input-wrapper button-wrapper">
                    <button id="submit-button"  type="submit">
                      Make Reservation
                    </button>
                  </label>
                </div>
            </form>
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