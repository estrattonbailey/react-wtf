import React, { PropTypes, Children } from 'react'
import Outer from './outer'
import Slide from './slide'
import Pre from './elements/pre'
import {
  Color1
} from './elements'

export default props => {
  return (
    <Outer>

      <Slide>
        <h1>what is React?</h1>
      </Slide>

      <Slide>
        <h3>easy: <Color1>it's javascript</Color1></h3>
      </Slide>
      
      <Slide>
        <h3>things React is not:</h3>
        <ul>
          <li>the savior of the free world</li>
          <li>opinionated</li>
          <li>a <Color1>framework</Color1></li>
        </ul>
      </Slide>

      <Slide>
        <Pre>{`
import React from 'react'
import { highlight, languages } from 'prismjs'

export default class Pre extends React.Component {
  constructor(props){ super(props) }

  componentDidMount(){
    this.refs.code.innerHTML = highlight(this.props.children, languages.javascript)
  }

  render(){
    return (
      <pre><code ref='code'>{this.props.children}</code></pre>
    )
  }
}
        `}</Pre>
      </Slide>

    </Outer>
  )
}
