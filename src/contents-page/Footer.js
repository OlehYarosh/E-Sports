import React from "react";
import '../styles/components/Footer.css';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.png';
import telegram from '../assets/telegram.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="логотип" />
            <p className="p-tel">Тел. відділу продажів: <br />
                <a href="tel:+380441230045">+38 (045) 123 00 45</a></p>
            <p className="p-email">E-mail: <br />
                <a href="mailto:esports@gmail.com">esports@gmail.com</a></p>
            <div className="links">
                <img src={facebook} alt="facebook" />
                <img src={telegram} alt="telegram" />
                <img src={instagram} alt="instagram" />
                <img src={youtube} alt="youtube" />
            </div>
            <p className="p-copy">E-sports &copy; 2023 <br />
                Всі права захищені</p>
        </div>
    )
}

export default Footer