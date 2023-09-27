import React from "react";
import '../styles/components/Reviews.css';
import RevCard from "./components/RevCard";
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';


const Reviews = () => {
    return (
        <div className="reviews">
            <h2 className="reviews-h2">Відгуки</h2>
            <div className="reviews-list">
                <RevCard 
                    user-photo = {user1}
                    user-name = 'Андрій'
                    user-comments = 'Неймовірно зручне крісло, брав та не пожалкував, раджу всім).'
                />
                <RevCard
                    user-photo = {user2}
                    user-name = 'Михайло'
                    user-comments = 'Я професійний стример, і стільці E-sports змінили для мене гру. Виняткова підтримка та стильний дизайн роблять мої трансляції приємнішими та захоплюючими. Люблю це!' 
                />
                <RevCard
                    user-photo = {user3}
                    user-name = 'Катя'
                    user-comments = 'Мабуть, саме круте і зручне крісло, але мала проблему з валиковим колесом, подзвонила в тех. підтримку все швидко вирішили, все інше 8/10.'
                />
            </div>
        </div>
    )
}

export default Reviews;