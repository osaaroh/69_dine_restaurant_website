import './About.css'
import Slider from './Slider'

function About() {
  return (
    <>
    <div className="container container-white-bg container-enjoyable">
        <div className="wrapper wrapper-enjoyable">
            <div className="img">
                <picture >
                    <source srcSet="/images/homepage/enjoyable-place-tablet@2x.jpg" media="(max-width: 960px)" className="source-img"/>
                    <img src="/images/homepage/enjoyable-place-desktop@2x.jpg" alt="image mockups"/>
                </picture>
            </div>
            
            <div className="text">
                <h2>Enjoyable place for all the family</h2>
                <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
            </div>
        </div>
    </div>
    <div className="container container-white-bg container-locally-sourced">
        <div className="wrapper wrapper-locally-sourced">
            <div className="text">
                <h2>The most locally sourced food</h2>
                <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food..</p>
            </div>
            <div className="img">
                <picture >
                    <source srcSet="/images/homepage/locally-sourced-tablet@2x.jpg" media="(max-width: 960px)" className="source-img"/>
                    <img src="/images/homepage/locally-sourced-desktop@2x.jpg" alt="image mockups"/>
                </picture>
            </div>
        </div>
    </div>
    <div className="container container-menu-list">
        <div className="wrapper wrapper-menu-list">
            <div className="text">
                <h2>A few highlights from our menu</h2>
                <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favorites. Our menu is revamped every season.</p>
            </div>
            <div className="menu-list">
                <div className="menu__list-item">
                    <div className="img_wrapper">
                        <img src="./images/homepage/salmon-desktop-tablet@2x.jpg" alt="photo of seared salmon" />
                    </div>
                        
                    <div className='text_wrapper'>
                        <h3>Seared Salmon Fillet</h3>
                        <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
                    </div>
                </div>
                <div className="menu__list-item">
                    <div className="img_wrapper">
                        <img src="./images/homepage/beef-desktop-tablet@2x.jpg" alt="beef steak" />
                    </div>
                    
                    <div className='text_wrapper'>
                        <h3>Rosemary Filet Mignon</h3>
                        <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
                    </div>
                </div>
                <div className="menu__list-item">
                    <div className="img_wrapper">
                        <img src="./images/homepage/chocolate-desktop-tablet@2x.jpg" alt="chocolate in cup" />
                    </div>
                    <div className='text_wrapper'>
                        <h3>Summer Fruit Chocolate Mousse</h3>
                        <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Slider />


    
    </>)
}

export default About