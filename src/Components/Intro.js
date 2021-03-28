import React from 'react'
import PropTypes from 'prop-types'

class Intro extends React.Component {
  render () {
    const {sendInfo} = this.props;
    return(
      <div className="intro">
          <div className="bg"style={{backgroundImage: 'url(./src/intro.jpg)'}}/>
        <div className="content-box">

          <div className="menu">
            <div className="logo"><span>S</span>uperdim</div>
            <div className="tel"><a href="tel:+380952264040"onClick={()=>{sendInfo('calling')}}><i className="icon-phone"/>+38 095 226 40 40</a></div>
          </div>
          <div className="text">
            <h1><span>БУРЕНИЕ СКВАЖИН</span> <br/>В ЧЕРКАССАХ</h1>
            <h2><span>СКИДКИ</span> на бурение скважин на воду в Черкассах</h2>
              <div className="btns">
                <div className="btn btn_call" onClick={()=>{this.props.clickCall();}}>Позвонить</div>
                <div className="btn btn_re_call" onClick={()=>{this.props.openLayer()}}>Заказать звонок</div>
              </div>
        </div>

        </div>
      </div>
    )
  }
}

export default Intro;
