import React from "react";
import '../styles/components/About.css';
import chair from '../assets/chair-about.png';

const About = () => {
    return (
        <div className="about" id="about-content">
            <div className="container-about">
                <div className="content-about">
                    <h3 className="title-about">Про крісла E-sports</h3>
                    <h4 className="subtitle-about">Комфорт і ефективність в одному кріслі</h4>
                    <div className="description-about">
                        <p>
                            Крісла E-sports  пропонують ідеальне поєднання комфорту та
                            продуктивності для тих, хто цінує комфортне та ефективне
                            робоче місце. Незалежно від того, чи ви геймер, стример, кіберспортсмен
                            або ІТ-фахівець, ці крісла забезпечують оптимальну підтримку
                            для вашої спини, шиї та рук, дозволяючи вам зосередитися на роботі
                            чи іграх.
                        </p>
                        <p>
                            Використовуючи передові технології та високоякісні матеріали,
                            крісла E-sports створюють ідеальні умови для підвищення вашої
                            продуктивності та комфорту під час довгих годин роботи чи розваг.
                            Відчуйте різницю, насолоджуйтесь комфортом і зробіть роботу за
                            комп’ютером незабутньою разом із кріслами E-sports.
                        </p>
                    </div>
                </div>
                <img src={chair} alt="крісло" className="img-about" />
            </div>
        </div>
    )
}

export default About;
