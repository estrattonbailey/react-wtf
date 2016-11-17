import React from 'react'
import { highlight, languages } from 'prismjs'

export default class Pre extends React.Component {
  constructor(props){ super(props) }

  componentDidMount(){
    this.refs.code.innerHTML = highlight(this.props.children, languages.javascript)
  }

  render(){
    return (
      <pre className={this.props.className}><code ref='code'>{this.props.children}</code></pre>
    )
  }
}
