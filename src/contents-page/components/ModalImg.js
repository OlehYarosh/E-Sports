import React, { useState } from "react";

function ModalImg({ imageUrl, descrpImg, classImg}) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="modal-container">
            <img 
                src={imageUrl} 
                alt={descrpImg}
                className={classImg} 
                onClick={openModal}
            />
            {isOpen && (
                <div className="modal">
                    <div className="modal-background" onClick={closeModal}></div>
                    <span className="close-modal" onClick={closeModal}>&times;</span>
                    <img 
                        src={imageUrl}
                        alt={descrpImg}
                        className="modal-content modal-image"
                    />
                </div>
            )}
        </div>
    );
}

export default ModalImg;
