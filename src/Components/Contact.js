import React from 'react'
import PropTypes from 'prop-types'

class Contact extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      num: ''
    }
  }
  render () {
    const {num} = this.state;
    return(
      <div className="contact">
        <div className="content-box">
          <div className="our">
            <span>Наш номер:</span>
            <a id="callUs" href="tel:380687070709"onClick={()=>{
                this.props.sendInfo('calling');
              }}><i className="icon-phone" />+38 068 707 07 09</a>
          </div>
          <div className="let">
            <label htmlFor="tel">СВЯЗАТЬСЯ С НАМИ:</label>
            <input
              type="number"

              id='tel'
              value={this.state.num}
              placeholder="(000) 000 00 00"
              maxLength="10"
              onChange={({target})=>{this.handleChangeInput(target)}}
              />
            <div className="btn" onClick={()=>{
                if(num.length > 8){
                this.props.sendInfo('',num);
              }else{
                alert("Вы не ввели свой номер!");
              }
              }}>Позвоните мне</div>
          </div>
        </div>
      </div>
    )
  }


  handleChangeInput(target){
    if(target.value.length > 10){
      console.log('to big');
      return;
    }
    this.setState({
      num: target.value
    })
  }
}

export default Contact;
