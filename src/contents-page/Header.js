import React from "react";
import '../styles/components/Header.css';
import logoSvg from '../assets/logo.svg';
import searchSvg from '../assets/search.svg';
import basketSvg from '../assets/basket.svg';

const Header = () => {
    const scrollToAbout = () => {
        const aboutContent = document.getElementById("about-content");
        if (aboutContent) {
            aboutContent.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="header">
            <img src={logoSvg} className="logo" alt="логотип" />

            <div className="menu">
                <p className="menu-item">Магазин</p>
                <p className="menu-item" onClick={scrollToAbout} >Про нас</p>
                <p className="menu-item">Підтримка</p>
            </div>
            <div className="header-icons">
                <img src={searchSvg} alt='пошук' className="svg-icon" />
                <img src={basketSvg} alt='корзина' className="svg-icon" />
            </div>
        </div>
    )
}

export default Header;