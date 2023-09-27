import React from "react";

const RevCard = (props) => {
    return (
        <div className="reviews-card">
            <div className="reviews-card-content">
                <img src={props['user-photo']} alt="фото користувача" />
                <h4>{props['user-name']}</h4>
            </div>
            <p className="reviews-card-comments">{props['user-comments']}</p>
        </div>
    )
}

export default RevCard;
