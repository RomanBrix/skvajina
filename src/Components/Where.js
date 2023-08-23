import React from "react";
import PropTypes from "prop-types";

class Where extends React.Component {
    render() {
        return (
            <div className="where">
                <div className="content-box">
                    <h2>Також ми знаходимося в наступних областях</h2>
                    <ul>
                        <li>Київська</li>
                        <li>Житомирська</li>
                        <li>Черкаська</li>
                        <li>Кіровоградська</li>
                        <li>Вінницька</li>
                        <li>Миколаївська</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Where;
