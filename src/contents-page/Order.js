import React, { useState } from "react";
import '../styles/components/Order.css';
import image from '../assets/order-img.png';

const Order = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "+380 ",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.name.length < 2) {
            newErrors.name = "Ім'я повинно містити щонайменше 2 символи";
        }

        const emailPattern = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = "Невірний формат пошти: aaa@aa.aa";
        }

        const phonePattern = /^\+380\s\d{3}\d{3}\d{2}\d{2}$/;
        if (!phonePattern.test(formData.phone)) {
            newErrors.phone = "Невірний формат номеру: 123-456-78-90";
        }

        return newErrors;
    };

    const scrollToAbout = () => {
        const aboutContent = document.getElementById("products");
        if (aboutContent) {
            aboutContent.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
    
        if (Object.keys(newErrors).length === 0) {
            scrollToAbout();
        } else {
            setErrors(newErrors);
        }
    };
    

    return (
        <div className="order-container">
            <h3 className="order-h3">Сподобалось? Замовляй тут</h3>
            <div className="order-content">
                <div className="order-form">
                    <form onSubmit={handleSubmit}>
                        <label>Прізвище та ім’я</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}

                        <label>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="aaa@aa.aa"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <label>Номер телефону</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}

                        <button className="order-form-button" type="submit">Замовити зараз</button>
                    </form>
                </div>
                <img src={image} alt="зображення щасливого чоловіка який замовив в нас товар" />
            </div>
        </div>
    )
}

export default Order;
