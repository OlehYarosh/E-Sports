import React, { useState } from "react";
import '../styles/components/Reviews.css';
import RevCard from "./components/RevCard";
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';
import user5 from '../assets/user5.png';
import user6 from '../assets/user6.png';
import arrLeft from '../assets/arrow-left.svg';
import arrRight from '../assets/arrow-right.svg';

const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviewsData = [
        {
            userPhoto: user1,
            userName: 'Андрій',
            userComments: 'Неймовірно зручне крісло, брав та не пожалкував, раджу всім).' 
        },
        {
            userPhoto: user2,
            userName: 'Олена',
            userComments: 'Це крісло - просто фантастика! Завдяки йому, мої геймплейні сесії стали набагато комфортнішими та продуктивними. Як на мене, це кращий вибір!'
        },
        {
            userPhoto: user3,
            userName: 'Катя',
            userComments: 'Мабуть, саме круте і зручне крісло, але мала проблему з валиковим колесом, подзвонила в тех. підтримку все швидко вирішили, все інше 8/10.'
        },
        {
            userPhoto: user4,
            userName: 'Михайло',
            userComments: 'Я професійний стример, і стільці E-sports змінили для мене гру. Виняткова підтримка та стильний дизайн роблять мої трансляції приємнішими та захоплюючими. Люблю це!' 
        },
        {
            userPhoto: user5,
            userName: 'Артем',
            userComments: 'E-sports - це мій вибір номер один, і їхні крісла - це справжнє джерело комфорту під час гри. Зараз я не уявляю грати без нього!'
        },
        {
            userPhoto: user6,
            userName: 'Ірина',
            userComments: 'Нещодавно придбав крісло від E-sports, і не можу нарадуватися своєму вибору. Воно просто ідеально підходить для геймінгу і робить його ще захоплюючішим!'
        }
        
    ];

    const nextReview = () => {
        setCurrentReview((currentReview + 1) % reviewsData.length);
    };

    const prevReview = () => {
        setCurrentReview((currentReview - 1 + reviewsData.length) % reviewsData.length);
    };

    const getDisplayReviews = () => {
        if (currentReview + 3 <= reviewsData.length) {
            return reviewsData.slice(currentReview, currentReview + 3);
        } else {
            const remainingReviews = 3 - (reviewsData.length - currentReview);
            return [
                ...reviewsData.slice(currentReview),
                ...reviewsData.slice(0, remainingReviews)
            ];
        };
    }

    return (
        <div className="reviews">
            <h2 className="reviews-h2">Відгуки</h2>
            <div className="reviews-list">
                <button onClick={prevReview} className="prev">
                    <img src={arrLeft} alt="стрілка вліво"/>
                </button>
                {getDisplayReviews().map((review, index) => (
                    <RevCard
                        key={index}
                        user-photo={review.userPhoto}
                        user-name={review.userName}
                        user-comments={review.userComments}
                    />
                ))}
                <button onClick={nextReview} className="next">
                    <img src={arrRight} alt="стрілка вправо" />
                </button>
            </div>
        </div>
    )
}

export default Reviews;