import React, { PropTypes, Children } from 'react'
import Outer from './outer'
import Slide from './slide'
import H from './elements/heading'
import Pre from './elements/pre'

export default props => {
  return (
    <Outer>

      <Slide>
        <h1>What is React?</h1>
      </Slide>

      <Slide>
        <h3>hint: <span className='c1'>javascript</span></h3>
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
