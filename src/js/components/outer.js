import React, { PropTypes, Children } from 'react'

export default class Outer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      slides: Children.toArray(this.props.children),
      index: 0,
      prev: 0,
      next: 1
    }

    this.keyPress = this.keyPress.bind(this)

    window.addEventListener("keydown", this.keyPress);
  }

  keyPress(e){
    if (
      event.keyCode === 37 
      || event.keyCode === 33 
      || (event.keyCode === 32 && event.shiftKey)
    ){
      this.prevSlide();
    } 
    else if (
      event.keyCode === 39 
      || event.keyCode === 34 
      || (event.keyCode === 32 && !event.shiftKey)
    ) {
      this.nextSlide();
    }
  }

  prevSlide(){
    this.setState({
      index: Math.max(this.state.prev, 0),
      prev: Math.max(this.state.prev--, 0),
      next: this.state.index
    })
  }

  nextSlide(){
    this.setState({
      index: Math.min(this.state.next, this.state.slides.length),
      prev: this.state.index,
      next: Math.min(this.state.index++, this.state.slides.length)
    })
  }

  render(){
    const componentToRender = this.state.slides[this.state.index]

    return (
      <div className='slideshow pv2 ts1'>
        <div className='container--m mha w1 tsx'>
          {componentToRender}
        </div>
      </div>
    )
  }
}
