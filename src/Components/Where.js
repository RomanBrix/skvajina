import React from 'react'
import PropTypes from 'prop-types'

class Where extends React.Component {
  render () {
    return(
      <div className="where">
        <div className="content-box">
          <h2>Так же мы находимся в следующих областях</h2>
          <ul>
            <li>Киевская</li>
            <li>Житомерская</li>
            <li>Черкасская</li>
            <li>Кировоградская</li>
            <li>Винницкая</li>
            <li>Николаевская</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Where;
