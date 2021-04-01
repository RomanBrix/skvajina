import React from 'react'
import PropTypes from 'prop-types'

class Intro extends React.Component {
  // <div className="logo"><span>S</span>uperdim</div>
  // <div className="logo"><img src="./src/logo.png" alt=""/></div>
  render () {
    const {sendInfo} = this.props;
    return(
      <div className="intro">
          <div className="bg"style={{backgroundImage: 'url(./src/intro.jpg)'}}/>
        <div className="content-box">

          <div className="menu">
            <div className="logo"><span>Вода</span> в дом</div> 
            <div className="tel"><a href="tel:+380687070709"onClick={()=>{sendInfo('calling')}}><i className="icon-phone"/>+38 068 707 07 09</a></div>
          </div>
          <div className="text">
            <h1><span>БУРЕНИЕ СКВАЖИН</span></h1>
            <h2><span>СКИДКИ</span> на бурение скважин на воду </h2>
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
