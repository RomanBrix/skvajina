import React from "react";
import PropTypes from "prop-types";

class Review extends React.Component {
    render() {
        return (
            <div className="review">
                <div className="content-box">
                    <h2>Відгуки наших клієнтів</h2>
                    <div className="blocks">
                        <div className="block">
                            <div className="top">
                                <div className="name">Ганна</div>
                                <div className="stars">
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                </div>
                            </div>
                            <div className="title">
                                Буріння свердловини для води
                            </div>
                            <div className="text">
                                <p>
                                    Нам знадобились послуги спеціальної техніки
                                    для того, щоб пробурити свердловину для води
                                    в Черкасах на дачному ділянці. Знайшли
                                    контакти вашої компанії через знайомих. У
                                    призначений термін приїхала бригада майстрів
                                    і дуже оперативно організували нам
                                    свердловину. Дякую!
                                </p>
                                <span>16.05.2018</span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="top">
                                <div className="name">Анастасія</div>
                                <div className="stars">
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                </div>
                            </div>
                            <div className="title">
                                Артезіанська свердловина
                            </div>
                            <div className="text">
                                <p>
                                    Я ніколи не думала, що можна так швидко і
                                    легко зробити прямо у дворі свого приватного
                                    будинку артезіанську свердловину! Дякую
                                    майстрам вашої компанії за професіоналізм та
                                    надання чудової ціни за свою працю. Будемо
                                    звертатися ще й радити знайомим!
                                </p>
                                <span>02.04.2019</span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="top">
                                <div className="name">Роман</div>
                                <div className="stars">
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                    <i className="icon-star-filled" />
                                </div>
                            </div>
                            <div className="title">
                                Буріння свердловини на воду
                            </div>
                            <div className="text">
                                <p>
                                    Фахівці вашої компанії проводили буріння
                                    свердловин на воду вручну на нашому дачному
                                    ділянці. Майстри приїхали вчасно, у них були
                                    всі необхідні інструменти. У ґрунті попався
                                    великий корінь від старого дерева. Його
                                    швидко видалили і це не завадило подальшого
                                    процесу.
                                </p>
                                <span>25.01.2020</span>
                            </div>
                        </div>
                    </div>

                    <div className="btns">
                        <div
                            className="btn"
                            onClick={() => {
                                this.props.clickCall();
                            }}
                        >
                            Зателефонувати
                        </div>
                        <div
                            className="btn btn-third"
                            onClick={() => {
                                this.props.openLayer();
                            }}
                        >
                            Замовити дзвінок
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Review;
