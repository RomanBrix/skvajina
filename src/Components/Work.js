import React from "react";
import PropTypes from "prop-types";

class Work extends React.Component {
    render() {
        return (
            <div className="work">
                {/* <div className="bg" style={{backgroundImage: 'url(./src/work.png)'}}/> */}
                <div className="content-box">
                    <h2>Як ми працюємо?</h2>
                    <div className="blox">
                        <div className="block">
                            <i className="icon-tty" />
                            <p>Зателефонуйте нам або залиште заявку</p>
                        </div>
                        <div className="block">
                            <i className="icon-truck" />
                            <p>Виїзд бригади</p>
                        </div>
                        <div className="block">
                            <i className="icon-chat" />
                            <p>Консультація</p>
                        </div>
                        <div className="block">
                            <i className="icon-ok-squared" />
                            <p>Якісна робота</p>
                        </div>
                        <div className="block">
                            <i className="icon-calendar" />
                            <p>Результат</p>
                        </div>
                    </div>
                    <div
                        className="btn"
                        onClick={() => {
                            this.props.clickCall();
                        }}
                    >
                        Зателефонувати
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
