import React from 'react'
import PropTypes from 'prop-types'

class Work extends React.Component {
  render () {
    return(
      <div className="work">
        <div className="bg" style={{backgroundImage: 'url(./src/work.png)'}}/>
        <div className="content-box">
          <h2>Как мы работаем?</h2>
          <div className="blox">
            <div className="block">
              <i className='icon-tty'/>
              <p>Позвоните нам или оставьте заявку</p>
            </div>
            <div className="block">
              <i className='icon-truck'/>
              <p>Выезд бригады</p>
            </div>
            <div className="block">
              <i className='icon-chat'/>
              <p>Консультация</p>
            </div>
            <div className="block">
              <i className='icon-ok-squared'/>
              <p>Качественная работа</p>
            </div>
            <div className="block">
              <i className='icon-calendar'/>
              <p>Результат</p>
            </div>
          </div>
          <div className="btn btn_call" onClick={()=>{this.props.clickCall();}}>Позвонить</div>
        </div>
      </div>
    )
  }
}

export default Work;
