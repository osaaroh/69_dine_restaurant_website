import React, { useEffect } from 'react'
import './Slider.css';

function Slider() {
    interface SliderItem {
    image: string;
    title: string;
    content: string;
    } 

    const SliderContent : SliderItem[] = [
        {image: '/images/homepage/family-gathering-desktop@2x.jpg', title: 'Family Gathering', content: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.'},
        {image: '/images/homepage/special-events-desktop@2x.jpg', title: 'Special Events', content: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.'},
        {image: '/images/homepage/social-events-desktop@2x.jpg', title: 'Social Events',content: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.'}]
        
        let [currentIndex, setCurrentIndex] = React.useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderContent.length);
            }, 5000);

            return () => clearInterval(interval); // Cleanup to prevent memory leaks
        }, [SliderContent.length]);

    
  return (
        <div className="container container-white-bg container-slider">
            <div className="wrapper wrapper-slider">
                <div className="img">
                    <img className='fadeIn' src={SliderContent[currentIndex].image} alt="" />
                </div>
                
                <div className="text">
                    <h2>{SliderContent[currentIndex].title}</h2>
                    <p>{SliderContent[currentIndex].content}</p>
                    <button type="button">Book a Table</button>

                    <div className="tabs_wrapper">
                        <div className="tabs">
                            <div className={`tab-link__wrapper ${currentIndex==0?"active":""}`} onClick={()=>{setCurrentIndex(0)}}><a href="#" onClick={(e)=>{e.preventDefault();}}>Family Gathering</a></div>
                            <div className={`tab-link__wrapper ${currentIndex==1?"active":""}`} onClick={()=>{setCurrentIndex(1)}}><a href="#" onClick={(e)=>{e.preventDefault();}}>Special Events</a></div>
                            <div className={`tab-link__wrapper ${currentIndex==2?"active":""}`} onClick={()=>{setCurrentIndex(2)}}><a href="#" onClick={(e)=>{e.preventDefault();}}>Social Events</a></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Slider