import React from "react";
import '../styles/components/Advantages.css'
import AdvCard from "./components/AdvCard";
import advChair from '../assets/adv-chair.png';
import ModalImg from "./components/ModalImg";

const Advantages = () => {
    return (
        <div className="advantages">
            <h1 className="advantages-h1">Переваги</h1>
            <div className="advantages-content">
                <div className="advantages-left">
                    <AdvCard 
                        title="Бездоганна ергономіка"
                        description="Ідеально збалансована форма та підтримка для комфортної та здорової постави."
                    />
                    <AdvCard 
                        title="Зручні сидіння"
                        description="М'яка і зручна оббивка, що забезпечує комфорт навіть під час тривалих занять."
                    />
                </div>

                <ModalImg 
                    imageUrl={advChair} 
                    descrpImg="архітектура крісла"
                    classImg="adv-chair"
                />

                <div className="advantages-right">
                    <AdvCard 
                        title='Високоякісні матеріали'
                        description='Високоякісні матеріали, міцна конструкція та довговічність для тривалого використання.'
                    />
                    <AdvCard 
                        title='Стильний дизайн'
                        description='Сучасний і елегантний зовнішній вигляд, який додає естетики та стилю вашому робочому простору.'
                    />
                </div>
            </div>
        </div>
    )
}

export default Advantages;
