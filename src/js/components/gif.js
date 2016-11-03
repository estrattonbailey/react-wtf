import React, { PropTypes } from 'react'
import cx from 'classnames'

class Gif extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      raw: `gifs/${this.props.src}.gif`,
      gif: false,
      visible: false
    }
  }

  componentDidMount(){
    const burner = document.createElement('img');

    burner.onload = e => {
      this.setState({
        gif: e.target.src
      })

      setTimeout(() => {
        this.setState({
          visible: true
        })
      }, 0)
    }

    burner.src = this.state.raw
  }

  render(){
    const c = cx('gif slide flex flex-wrap flex-items-center flex-justify-center', {
      'is-active': this.state.visible ? true : false
    })

    return (
      <section className={c}>
        <img className='loader' src="gifs/loading-bars.svg"/>
        <div className='absolute fit-x' style={
          { backgroundImage: `url(${this.state.gif})` }}/>
      </section>
    )
  }
}

export default Gif
