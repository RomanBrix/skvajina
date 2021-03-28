import React from 'react'
import PropTypes from 'prop-types'

class Photos extends React.Component {
  render () {
    return(
      <div className="photos">
        <div className="content-box">
          <h2>Фото наших работ в Черкассах</h2>
          <div className="blocks">
            <div className="block" onClick={({target})=>{this.changeClass(target)}}>
              <img src="./src/gallery1.jpg" alt=""/>
            </div>
              <div className="block"onClick={({target})=>{this.changeClass(target)}}>
              <img src="./src/gallery2.jpg" alt=""/>
            </div>
              <div className="block"onClick={({target})=>{this.changeClass(target)}}>
              <img src="./src/gallery3.jpg" alt=""/>
            </div>
              <div className="block"onClick={({target})=>{this.changeClass(target)}}>
              <img src="./src/gallery4.jpg" alt=""/>
            </div>
              <div className="block"onClick={({target})=>{this.changeClass(target)}}>
              <img src="./src/gallery5.jpg" alt=""/>
            </div>
              <div className="block"onClick={({target})=>{this.changeClass(target)}}>
              <img src="./src/gallery6.jpg" alt=""/>
            </div>
          </div>
          <div className="btns">
            <div className="btn btn_call" onClick={()=>{this.props.clickCall();}}>Позвонить</div>
            <div className="btn btn_re_call"onClick={()=>{this.props.openLayer()}}>Заказать звонок</div>
          </div>
        </div>
      </div>
    )
  }

  changeClass(target){
    if (target.classList.contains('block')) {
      target.classList.toggle('bigImg');
    }

  }
}

export default Photos;
