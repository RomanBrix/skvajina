import React from 'react'
import PropTypes from 'prop-types'

class About extends React.Component {
  render () {
    return(
      <div className="about">
        <div className="content-box">
          <div className="left">
            <h2>О нас</h2>
            <p>Многолетний опыт нашей компании позволяет с уверенностью заявить - мы лучшие в своей отрасли! За годы своей работы, мы приобрели множество клиентов по всей Украине и подтверждаем безупречность репутации ежедневным трудом. Предлагается оперативная и профессиональная услуга - бурение скважин Черкассы, которая избавит вас от необходимости вникать в сложный технический процесс.</p>
            <p>Мы готовы предоставить бурильные работы на максимально выгодных для клиента условиях. Менеджеры в режиме онлайн или путем телефонных переговоров предоставят предварительную консультацию и оформят заявку на выезд мастера.</p>
          </div>
          <div className="right">
            <img src="./src/logo.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
