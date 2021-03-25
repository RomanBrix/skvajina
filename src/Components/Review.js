import React from 'react'
import PropTypes from 'prop-types'

class Review extends React.Component {
  render () {
    return(
      <div className="review">
        <div className="content-box">
          <h2>Отзывы наших клиентов в Черкассах</h2>
          <div className="blocks">
            <div className="block">
              <div className="top">
                <div className="name">Анна</div>
                <div className="stars">
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                </div>
              </div>
              <div className="title">Бурение скважины для воды</div>
              <div className="text">
                <p>Нам понадобились услуги специальной техники для того, чтобы пробурить скважину для воды в Черкассах на дачном участке. Нашли контакты вашей компании через знакомых. В назначенный срок приехала бригада мастеров и очень оперативно организовали нам скважину. Спасибо!</p>
                <span>16.05.2018</span>
              </div>
            </div>
            <div className="block">
              <div className="top">
                <div className="name">Анастасия</div>
                <div className="stars">
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                </div>
              </div>
              <div className="title">Артезианская скважина</div>
              <div className="text">
                <p>Я никогда не думала, что можно так быстро и легко сделать прямо во дворе своего частного дома артезианскую скважину! Спасибо мастерам вашей компании за профессионализм и предоставление отличной цены за свою работу. Будем обращаться еще и советовать знакомым!</p>
                <span>02.04.2019</span>
              </div>
            </div>
            <div className="block">
              <div className="top">
                <div className="name">Роман</div>
                <div className="stars">
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                  <i className="icon-star-filled"/>
                </div>
              </div>
              <div className="title">Бурения скважины на воду</div>
              <div className="text">
                <p>Специалисты вашей компании проводили бурение скважин на воду вручную на нашем дачном участке. Мастера приехали вовремя, у них были все необходимые инструменты. В грунте попался большой корень от старого дерева. Его быстро удалили и это не помешало дальнейшему процессу.</p>
                <span>25.01.2020</span>
              </div>
            </div>
          </div>

          <div className="btns">
            <div className="btn btn_call">Позвонить</div>
            <div className="btn btn_re_call">Заказать звонок</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Review;
