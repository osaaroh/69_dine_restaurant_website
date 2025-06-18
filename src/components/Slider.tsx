import React from 'react'
import './Slider.css';

function Slider() {
    interface SliderItem {
    image: string;
    title: string;
    content: string;
    } 

    let SliderContent : SliderItem[] = [
        {image: '', title: 'Family Gathering', content: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.'},
        {image: '', title: 'Special Events', content: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.'},
        {image: '', title: 'Social Events',content: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.'}]
  return (
        <div className="container container-white-bg container-slider">
            <div className="wrapper wrapper-slider">
                <div className="img">
                    <img src="/images/homepage/enjoyable-place-desktop@2x.jpg" alt="" />
                </div>
                
                <div className="text">
                    <h2>Family Gathering</h2>
                    <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                    <button type="button">Book a Table</button>

                    <div className="tabs_wrapper">
                        <div className="tabs">
                            <div className='tab-link__wrapper'><a href="">Family Gathering</a></div>
                            <div className='tab-link__wrapper'><a href="">Special Events</a></div>
                            <div className='tab-link__wrapper'><a href="">Social Events</a></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Slider