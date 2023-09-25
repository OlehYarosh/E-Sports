import React from "react";

const ProdCard = (props) => {
    return (
        <div className="prod-card">
            <img src={props['photo']} className="prod-card-img" alt="фото товару" />
            <div className="prod-card-discription">
                <p className="prod-card-discription-p1">{props['product-name']}</p>
                <p className="prod-card-discription-p2">{props['product-price']}</p>
            </div>
            <button className="prod-card-button">Купити</button>
        </div>
    )
}

export default ProdCard;
