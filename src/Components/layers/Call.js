import React from 'react'
import PropTypes from 'prop-types'

class Call extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      num: ''
    }
  }
  render () {
    const {openLayer, sendInfo} = this.props;
    const {num} = this.state;
    return(
      <div className="call_layer" onClick={()=>{openLayer()}}>
        <div className="inputs" onClick={(e)=>{e.stopPropagation()}}>
          <p>Введите свой номер телефона и мы перезвоним Вам!</p>
          <label htmlFor="call">Ваш номер телефона:</label>
          <input
            type="number"
            id="call"
            value={this.state.num}
            placeholder="(000) 000 00 00"
            maxLength="10"
            onChange={({target})=>{this.handleChangeInput(target)}}
            />
          <div className="btn btn_get_call" onClick={
              ()=>{
                if(num.length < 9){
                  alert('неверный номер');
                  return;
                }
                sendInfo('',num);
                openLayer();
              }
            }>Позвоните мне</div>
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

export default Call;
