import { Link } from 'react-router-dom';
import './Home.css';
import './Res.css';
import { useRef } from 'react';
function Header() {
    const nav = useRef()

    return (
        <section id="header">
            <Link to={"/"}>
                <img src={'https://i.postimg.cc/g0FQkrMN/lo.png'} alt="" className="logo" />
                <img src={'https://i.postimg.cc/rskWHNsS/3.png'} className="logo2" alt="" />
            </Link>
            <div>
                <ul id="navbar" ref={nav}>
                    <li>
                        <Link to="/" id="close">
                            <i className="far fa-times" id="cicon" onClick={() => { nav.current.classList.toggle('active') }}></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/display" >Shop</Link>
                    </li>
                    <li>
                        <a href="#foot" >About</a>
                    </li>
                    <li>
                        <a href="#foot" >Contact</a>
                    </li>
                    <li id="lg-bag">
                        <Link to="/cart">
                            <i className="fa-solid fa-cart-shopping" style={{ color: 'gray' }}></i>
                        </Link>
                    </li>
                    <li id="lg-prof">
                        <Link to="/alldata">
                            <i className="fa-solid fa-user" style={{ color: '#626364' }}></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="mob">
                <Link to="/cart">
                    <i className="fa-solid fa-cart-shopping" style={{ color: 'gray' }}></i>
                </Link>
                <Link to="/alldata">
                    <i className="fa-solid fa-user" style={{ color: '#626364' }}></i>
                </Link>
                <i id="bar" className="fas fa-outdent" onClick={() => { nav.current.classList.toggle('active') }}></i>
            </div>
        </section>
    );
}

export default Header;