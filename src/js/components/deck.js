import React, { Children } from 'react'

export default class Deck extends React.Component {
  constructor(props){
    super(props)

    const active = parseInt(localStorage.getItem('activeIndex')) || 0

    const slides = Children.toArray(this.props.children)

    this.state = {
      slides: slides,
      index: active,
      size: slides.length - 1
    }

    window.addEventListener("keydown", this.keyPress.bind(this));
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
      index: Math.max(--this.state.index, 0)
    })
  }

  nextSlide(){
    this.setState({
      index: Math.min(++this.state.index, this.state.size)
    })
  }

  componentWillUpdate(props, state){
    localStorage.setItem('activeIndex', state.index)
  }

  render(){
    return (
      <div className='slideshow'>
        <div className='container--m mha w1'>
          <span className='counter h4'>{this.state.index}</span>
          {this.state.slides[this.state.index]}
        </div>
      </div>
    )
  }
}
