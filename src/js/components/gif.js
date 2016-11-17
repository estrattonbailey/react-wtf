import React, { PropTypes } from 'react'
import cx from 'classnames'

class Gif extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      // raw: `https://s3.amazonaws.com/barreldev/vim-lol/${this.props.src}.gif`,
      raw: `/gifs/${this.props.src}.gif`,
      gif: false,
      visible: false,
      mounted: false
    }
  }

  componentDidMount(){
    const burner = document.createElement('img');

    this.setState({
      mounted: true
    })

    burner.onload = e => {
      if (!this.state.mounted) return

      this.setState({ gif: e.target.src })

      setTimeout(() => {
        this.setState({ visible: true })
      }, 0)
    }

    burner.src = this.state.raw
  }

  componentWillUnmount(){
    this.setState({
      mounted: false
    })
  }

  render(){
    const c = cx('gif slide flex flex-wrap flex-items-center flex-justify-center', {
      'is-active': this.state.visible ? true : false
    })

    return (
      <section className={c}>
        <img className='loader' src="loading-bars.svg"/>
        <div className='absolute fit-x' style={
          { backgroundImage: `url(${this.state.gif})` }}/>
      </section>
    )
  }
}

export default Gif
