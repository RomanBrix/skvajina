import React from 'react'
import PropTypes from 'prop-types'

class Intro extends React.Component {
  render () {
    return(
      <div className="intro">
        <div className="bg"style={{backgroundImage: 'url(./src/intro.jpg)'}}/>
        <div className="menu">
          <div className="logo"><span>S</span>uperdim</div>
          <div className="tel"><a href="tel:+380952264040">+38 095 226 40 40</a></div>
        </div>
        <div className="text">
          <h1><span>БУРЕНИЕ СКВАЖИН</span> <br/>В ЧЕРКАССАХ</h1>
          <h2><span>СКИДКИ</span> на бурение скважин на воду в Черкассах</h2>
        </div>
        <div className="btns">
          <div className="btn btn_call">Позвонить</div>
          <div className="btn btn_re_call">Заказать звонок</div>
        </div>
      </div>
    )
  }
}

export default Intro;
