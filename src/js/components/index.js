import React, { PropTypes, Children } from 'react'
import Outer from './outer'
import Slide from './slide'

export default props => {
  return (
    <Outer>
      <Slide>
        <h1>What is React?</h1>
      </Slide>
      <Slide>
        <h1>How is React?</h1>
      </Slide>
    </Outer>
  )
}
