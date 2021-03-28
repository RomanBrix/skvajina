import Intro from './Intro';
import About from './About';
import Work from './Work';
import Photos from './Photos';
import Text from './Text';
import Review from './Review';
import Faq from './Faq';
import Where from './Where';
import Contact from './Contact';
import Call from './layers/Call';

import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      call_layer: false
    }
  }
  render () {
    return(
      <div className="App">
      {this.state.call_layer ?
        <Call
          openLayer={this.openLayer.bind(this)}
          sendInfo={this.sendInfo.bind(this)}
          />
        : ''}

      <Intro
        clickCall={this.clickCall.bind(this)}
        openLayer={this.openLayer.bind(this)}
        sendInfo={this.sendInfo.bind(this)}
        />
      <About/>
      <Work clickCall={this.clickCall.bind(this)}/>
      <Photos
        clickCall={this.clickCall.bind(this)}
        openLayer={this.openLayer.bind(this)}
        />
      <Text forText={forText[0]}
        clickCall={this.clickCall.bind(this)}
        openLayer={this.openLayer.bind(this)}
        />
      <Review
        clickCall={this.clickCall.bind(this)}
        openLayer={this.openLayer.bind(this)}
        />
      <Text forText={forText[1]}
        clickCall={this.clickCall.bind(this)}
        openLayer={this.openLayer.bind(this)}
        />
      <Faq
        clickCall={this.clickCall.bind(this)}
        openLayer={this.openLayer.bind(this)}
        />
      <Where/>
      <Contact

        openLayer={this.openLayer.bind(this)}
        sendInfo={this.sendInfo.bind(this)}
        />
    </div>
  )
  }

  sendInfo(type, num){
    let data = {}
    if(type === 'calling'){
      data = {
        name:"Кто-то нажал на кнопку позвонить",
      }
    }else{
      data = {
        name:"Просит позвонить!",
        tel: num,
      }
    }
    axios.post('/send.php',data)
    .then((res)=>{
      console.log(res);
      if(res.data ==='ok'){
        if(type !== 'calling'){
          alert('Ожидай звонка!');
        }

      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  openLayer(){
    const {call_layer} = this.state;
    this.setState({
      call_layer: !call_layer
    })
  }

  clickCall(){
    const btn_call = document.getElementById('callUs');
    // console.log(btn_call);
    btn_call.click();
  }
}

export default App;



const forText = [
  {
    title: 'Какие услуги мы предоставляем?',
    p_one: 'На сегодняшний день, мы активно производим бурение артезианских скважин в Черкассах, благодаря наличию специальной техники, а также персонала, который опытно и профессионально ею управляет. В своей работе мы используем современные машины и технику, но в тоже время, стараемся учитывать условия в которых будет создаваться скважина. Отталкиваясь от них, высокопрофильные специалисты нашей компании, выбирают самый подходящий для бурения метод. Мы предлагаем:',
    list: ['Бурение скважин малогабаритной установкой, которая предполагает комфортное размещение техники даже на небольших участках.',
    'Ручное бурение - специфический вид работ, часто применяется для труднодоступных мест. Возможно применение данного способа в комбинированном виде с параллельным использованием механической техники.',
  'Комбинированные методы - нас не пугают возникающие на пути преграды и трудности! Работаем с песками и слабоустойчивыми породами, применяя специально разработанные методы. Ваш запрос - скважина для воды Черкассы - будет выполнен вне зависимости от сложностей процесса.','Бурение машиной - предполагает крупномасштабные работы на больших и просторных территориях. Данный вид относится к ряду работ с использованием крупногабаритной техники.'],
    p_two: 'Если говорить о временных затратах на выполнение бурения, то таковые работы занимают, в среднем от 5 до 15 часов. Это напрямую зависит от пород почвы - делать скважину на песчаном участке на порядок проще, нежеле на глиняном грунте.'
  },
  {
    title: 'От чего зависит цена бурения скважин в Черкассах',
    p_one: 'Бурение скважин в Черкассах цена всегда демократична и обусловлена теми процессами, которые необходимо выполнить мастеру, чтобы добиться поставленной задачи. Стоимость бурения скважины в Черкассах зависит от ряда моментов, которые могут повлиять на ход работы. Клиент может заказать бурение, требующее особой срочности - данный фактор тоже может влиять на изменение стандартной цены. Цена зависит от ряда факторов:',
    list: ['Бурение скважин в труднодоступных местах в Черкассах напрямую влияет на цену','Глубина и диаметр скважины на воду','Конструкция и величина самой скважины','Потребность в количестве воды.'],
    p_two: 'Стоимость предварительно согласовывается с заказчиком. Оплата осуществляется только после завершения работ.'
  },
  {
    title: 'title',
    p_one: 'p_one',
    list: ['list','list'],
    p_two: 'p_two'
  }
]
