import "./Home.css";
import './Res.css'


function Hero() {
    return (
        <>
            <section id="hero" style={{ backgroundImage: `url('https://i.postimg.cc/mrbBDcqT/ban.png')` }}>
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons & up to 70% off!</p>
                <button onClick={() => { window.location.href = '/Display' }}>Shop Now</button>
            </section>
            <section className="section-p1" id="feature">
                <div className="fe-box">
                    <img src={'https://i.postimg.cc/bYkGs5Ng/f1.png'} alt="" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src={'https://i.postimg.cc/02vzmCzs/f2.png'} alt="" />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src={'https://i.postimg.cc/vHvcv6n6/f3.png'} alt="" />
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src={'https://i.postimg.cc/13547507/f4.png'} alt="" />
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src={'https://i.postimg.cc/rwnsBXQV/f5.png'} alt="" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="fe-box">
                    <img src={'https://i.postimg.cc/0NzjxWBp/f6.png'} alt="" />
                    <h6>F24/7Support</h6>
                </div>
            </section>
            <section id="banner" style={{ backgroundImage: `url('https://i.postimg.cc/LXvbTDmb/ban1.png')` }}>
                <h1 style={{ color: 'white' }}>Summar Sale</h1>
                <h2>Up to <span>70% off</span> - All t-Shirts</h2>
                <button className="normal" onClick={() => { window.location.href = '/Display' }}>Explore More</button>
            </section>
        </>
    );
}

export default Hero;
