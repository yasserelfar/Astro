import "./Home.css";
import './Res.css'
import { Link } from 'react-router-dom';
import logo from './img/logo1.jpeg'
import payimg from './img/pay.png';
function Footer() {
    return (
        <footer className="section-p1" id="foot">
            <div className="col1">
                <img src={logo} alt="" />
                <h4>Contact</h4>
                <p><strong>Address</strong>:DownTown, Cairo</p>
                <p><strong>Phone</strong>:+201278094294</p>
                <p><strong>Hours</strong>: 10:00-20:00. Sun-Thu</p>
                <div className="follow">
                    <h4>Follow Us</h4>
                    <div className="icon">
                        <a href="https://www.facebook.com/YassoElfar"> <i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.snapchat.com/add/yasser_muhame22"> <i className="fab fa-snapchat"></i></a>
                        <a href="https://www.instagram.com/yassoelfar"> <i className="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@yassoelfar"> <i className="fab fa-youtube"></i></a>

                    </div>
                </div>
            </div>
            <div className="col2">
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
            <div className="col3">
                <h4>My Account</h4>
                <Link to="/login">Sign in</Link>
                <Link to="/cart">View Cart</Link>
                <a href="#">Help</a>
                <a href="#"></a>
            </div>
            <div className="col4">
                <p>Secured pay Getways</p>
                <img src={payimg} alt="" />
            </div>
        </footer>
    )
}
export default Footer