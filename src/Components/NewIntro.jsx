import { CONTACT } from "../contacts";
import { ReactComponent as LogoSvg } from "../svg/Logo.svg";

export default function NewIntro(props) {
    return (
        <div className="intro">
            <div className="bg">
                <img src="/src/bg2.png" alt="" />
                <img src="/src/bg1.png" alt="" />
            </div>
            <div className="content-box">
                <div className="menu">
                    <div className="logo">
                        <LogoSvg />
                        <span>Гідро - Бур</span>
                    </div>
                    <div className="btns">
                        <div
                            className="tel"
                            onClick={() => {
                                props.sendInfo("calling");
                            }}
                        >
                            <a href={`tel:${CONTACT.phone_link}`}>
                                <i className="icon-phone" />
                                {CONTACT.phone_label}
                            </a>
                        </div>
                        <div
                            className="btn"
                            onClick={() => {
                                props.openLayer();
                            }}
                        >
                            Замовити дзвінок
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h1>
                        Буріння свердловин під ключ - Від концепції до
                        результату
                    </h1>
                    <p>
                        Прагнемо забезпечити Вам найвищу якість водопостачання,
                        яка відчувається в кожній краплі води, що потрапляє у
                        Ваш дім
                    </p>
                    <div className="btns">
                        <div
                            className="btn"
                            onClick={() => {
                                props.clickCall();
                            }}
                        >
                            Зателефонувати
                        </div>
                        <div
                            className="btn btn-second"
                            onClick={() => {
                                props.openLayer();
                            }}
                        >
                            Замовити дзвінок
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
