import React from "react";
import Header from "./Header";
import '../styles/components/StartPage.css'

const StartPage = () => {
    return (
        <div className="start-page">
            <Header />
            <section className="start-page-content">
                <div className="container">
                    <h1 className="container-h">Ігрові крісла</h1>
                    <p className="container-p">Відчуйте ергономіку та комфорт з кріслами E-sports</p>
                </div>

                <button>Замовити зараз</button>
            </section>
        </div>
    )
}

export default StartPage;