import React from "react";
import '../styles/components/Gallery.css'
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import arrLeft from '../assets/arrow-left.svg';
import arrRight from '../assets/arrow-right.svg';

const Gallery = () => {
    return (
        <div className="gallery">
            <h2 className="gallery-h2">Галерея</h2>
            <div className="gallery-list">
                <button className="prev-button">
                    <img src={arrLeft} alt="стрілка вліво"/>
                </button>
                <img src={gallery1} alt="перше фото" />
                <img src={gallery2} alt="друге фото" />
                <img src={gallery3} alt="третє фото" />
                <button className="next-button">
                    <img src={arrRight} alt="стрілка вправо" />
                </button>
            </div>
        </div>
    )
}

export default Gallery;