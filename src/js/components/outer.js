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
      e.keyCode === 37 
      || e.keyCode === 33 
      || (e.keyCode === 32 && e.shiftKey)
    ){
      this.prevSlide();
    } 
    else if (
      e.keyCode === 39 
      || e.keyCode === 34 
      || (e.keyCode === 32 && !e.shiftKey)
    ) {
      this.nextSlide();
    }
  }

  clamp(val){
    let _val

    console.log(val)

    if (val >= 0 && val <= this.state.slides.length){
      _val = val 
    } else if (val >= this.state.slides.length){
      _val = this.state.slides.length
    } else if (val <= 0){
      _val = 0
    }

    return _val;
  }

  prevSlide(){
    this.setState({
      index: this.clamp(this.state.index - 1) 
    })
  }

  nextSlide(){
    this.setState({
      index: this.clamp(this.state.index + 1) 
    })
  }

  render(){
    const componentToRender = this.state.slides[this.state.index]

    return (
      <div className='slideshow pv2 ts1 flex flex-items-center flex-justify-center'>
        <div className='container--m mha w1 tsx'>
          {componentToRender}
        </div>
      </div>
    )
  }
}
