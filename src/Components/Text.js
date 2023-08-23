import React from "react";
import PropTypes from "prop-types";

class Text extends React.Component {
    render() {
        // console.log(this.props);
        const { forText } = this.props;
        return (
            <div className="text">
                <div className="content-box">
                    <h2>{forText.title}</h2>
                    <p>{forText.p_one}</p>
                    <div className="list">{this.renderList(forText.list)}</div>
                    <p>{forText.p_two}</p>
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

    renderList(arr) {
        return arr.map((item, index) => {
            return (
                <div className="block" key={index * Math.random()}>
                    <div className="left">
                        <i className="icon-ok-circle" />
                    </div>
                    <div className="right">
                        <p>{item}</p>
                    </div>
                </div>
            );
        });
    }
}

export default Text;
