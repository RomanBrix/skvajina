import React from "react";
import PropTypes from "prop-types";

class Photos extends React.Component {
    render() {
        const imgSrcs = ["gallery3.jpg", "gallery4.jpg"];
        const videoSrcs = ["video1.mp4", "video2.mp4"];
        return (
            <div className="photos">
                <div className="content-box">
                    <h2>Фото/Відео наших робіт</h2>
                    <div className="blocks">
                        {this.renderPhotos(imgSrcs)}
                        {this.renderVideos(videoSrcs)}
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

    renderPhotos(srsc) {
        return srsc.map((src) => {
            return (
                <div className="block" onClick={this.changeClass} key={src}>
                    <img src={`/src/${src}`} alt="" />
                </div>
            );
        });
    }
    renderVideos(srsc) {
        return srsc.map((src) => {
            return (
                <div className="block video-block" key={src}>
                    <video
                        width="480"
                        controls
                        // poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif"
                    >
                        <source src={`/src/${src}`} type="video/mp4" />
                    </video>
                </div>
            );
        });
    }

    changeClass({ target }) {
        if (target.classList.contains("block")) {
            target.classList.toggle("bigImg");
        }
    }
}

export default Photos;
