import React from "react";
import '../../styles/components/Advantages.css'

const AdvCard = (props) => {
    return (
        <div className="adv-card">   
            <p className="adv-card-title">{props['title']}</p>
            <p className="adv-card-description">{props['description']}</p>
        </div>
    )
}

export default AdvCard