import React from 'react'

import Deck from './deck'
import Slide from './slide'
import Gif from './gif'
import C from './colors'
import Pre from './pre'
import Flex from './flex'

export default props => {
  return (
    <Deck>
      <Slide>
        <h1><C blue>React</C> wtf</h1>
      </Slide>
      <Slide>
        <h1><C blue>1</C> What is React</h1>
      </Slide>
      <Slide>
        <h3>React is a functional javascript library for building <C blue>interfaces for the web.</C></h3>
      </Slide>
      <Slide>
        <div>
          <h3>React is a functional javascript library for building <C blue>interfaces for the web.</C></h3>
          <ul>
            <li>templating (we'll use JSX)</li>
          </ul>
        </div>
      </Slide>
      <Slide>
        <div>
          <h3>React is a functional javascript library for building <C blue>interfaces for the web.</C></h3>
          <ul>
            <li>templating (we'll use JSX)</li>
            <li>application logic</li>
          </ul>
        </div>
      </Slide>
      <Slide>
        <div>
          <h3>React is a functional javascript library for building <C blue>interfaces for the web.</C></h3>
          <ul>
            <li>templating (we'll use JSX)</li>
            <li>application logic</li>
            <li>combination of concerns</li>
          </ul>
        </div>
      </Slide>
      <Slide>
        <h3>The best part is: it's just <C blue>javascript</C></h3>
      </Slide>
      <Gif src='magic'/>
      <Slide>
        <div>
          <h1>🔑 of this prezy</h1>
          <ol>
            <li>React is a pattern, and one of many "react-like" libraries</li>
            <li>learn to reason about component-based architecture</li>
          </ol>
        </div>
      </Slide>

      <Slide>
        <h1><C blue>2</C> Why React?</h1>
      </Slide>
      <Slide>
        <div>
          <h4>Because creating interactive experiences like this sucks:</h4>
          <Pre>{
`
  // counter.html
  <div class="counter">
    <span class="display"></span>
    <button>Add</button>
  </div>

  // counter.js 
  var i = 0;
  var $counter = $('.counter .display');
  var $btn = $('button');
  $btn.on('click', function(){
    $counter.innerHTML = i++;
  })

  // counter.css
  .counter {
    ...
  }
  .display {
    ...
  }
  button {
    ...
  }
`
          }
          </Pre>
        </div>
      </Slide>
      <Slide>
        <ul>
          <li>three separate files</li>
        </ul>
      </Slide>
      <Slide>
        <ul>
          <li>three separate files</li>
          <li>manually query and update DOM</li>
        </ul>
      </Slide>
      <Slide>
        <ul>
          <li>three separate files</li>
          <li>manually query and update DOM</li>
          <li>no way to track state or communicate with this component 😔</li>
        </ul>
      </Slide>
      <Slide>
        <h3>Here's that same component in React:</h3>
      </Slide>
      <Slide>
        <Pre>
          {
`
  import React from 'react'
  import { style } from 'glamor'

  const wrapper = style({
    ...
  })
  const display = style({
    ...
  })
  const button = style({
    ...
  })

  class Counter extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        count: 0
      }
    }

    increment(){
      this.setState({
        count: this.state.count+1
      })
    }

    render(){
      return (
        <div {...wrapper}>
          <span {...display}>{this.state.count}</span>
          <button {...button}
            onClick={this.increment.bind(this)}
            >Add</button>
        </div>
      )
    }
  }
`
          }
        </Pre>
      </Slide>
      <Slide>
        <ul>
          <li>one file!</li>
        </ul>
      </Slide>
      <Slide>
        <ul>
          <li>one file!</li>
          <li>declarative DOM, attributes, handlers</li>
        </ul>
      </Slide>
      <Slide>
        <ul>
          <li>one file!</li>
          <li>declarative DOM, attributes, handlers</li>
          <li>can easily be made to communicate with other components via props 😎</li>
        </ul>
      </Slide>

      <Slide>
        <h4>
          React also is smart enough to know what pieces need updating... somehow.<br/><br/> 
          That way, your whole page is re-rendered every time application state updates.
        </h4>
      </Slide>
      <Gif src='fam'/>

      <Slide>
        <h1><C blue>3</C> So wtf is React</h1>
      </Slide>
      <Gif src='alan'/>
      <Slide>
        <h2>React 👏 is 👏 just 👏 functions 👏 that 👏 return 👏 markup </h2>
      </Slide>
      <Slide>
        <h2><C blue>3.1</C> Stateless Functional Components</h2>
      </Slide>
      <Slide>
        <Pre>
          {
`
const H1 = props => {
  return (
    <h1 style={{color: 'blue'}}>
      {props.title}
    </h1>
  )
}

/* ES5 equiv
var H1 = function(props){
  return (
    <h1 style={{color: 'blue'}}>
      {props.title}
    </h1
  )
}
*/
`
          }
        </Pre>
      </Slide>
      <Slide>
        <Pre>
          {
`
<H1 title="Hello world!"/>
`
          }
        </Pre>
      </Slide>
      <Slide>
        <h1><C blue>Hello world!</C></h1>
      </Slide>
      <Slide>
        <Flex>
          <Pre className='ph1 w12'>
            {
`
<H1 title="Hello World!"/>
`
            }
          </Pre>
          <Pre className='ph1 w12'>
            {
`
const H1 = props => {
  return (
    <h1 style={{color: 'blue'}}>
      {props.title}
    </h1>
  )
}
`
            }
          </Pre>
        </Flex>
      </Slide>
      <Slide>
        <Flex>
          <Pre className='ph1 w12'>
            {
`
<H1 title="Hello World!" color="green"/>
`
            }
          </Pre>
          <Pre className='ph1 w12'>
            {
`
const H1 = props => {
  return (
    <h1 style={{color: props.color}}>
      {props.title}
    </h1>
  )
}
`
            }
          </Pre>
        </Flex>
      </Slide>
      <Slide>
        <Flex>
          <Pre className='ph1 w12'>
            {
`
<H1 title="Hello World!" color="green"/>
`
            }
          </Pre>
          <Pre className='ph1 w12'>
            {
`
const H1 = ({ title, color }) => {
  return (
    <h1 style={{color}}>
      {title}
    </h1>
  )
}
`
            }
          </Pre>
        </Flex>
      </Slide>

      <Slide>
        <h1><C blue>3.2</C> React.Component Subclasses</h1>
      </Slide>
      <Slide>
        <Pre>
          {
`
class Counter extends React.Component {
  render(){
    return (
      <div className='wrapper'>
        <span className='display'>0</span>
        <button>Add</button>
      </div>
    )
  }
}
`
          }
        </Pre>
      </Slide>
      <Slide>
        <Flex>
          <Pre className='ph1 w12'>
            {
  `
  <Counter initialCount='0'/>
  `
            }
          </Pre>
          <Pre className='ph1 w12'>
            {
  `
  class Counter extends React.Component {
    render(){
      return (
        <div className='wrapper'>
          <span className='display'>
            {this.props.initialCount}
          </span>
          <button>Add</button>
        </div>
      )
    }
  }
  `
            }
          </Pre>
        </Flex>
      </Slide>
      <Slide>
        <h3><C blue>3.2.1</C> Subclass State</h3>
      </Slide>
      <Slide>
        <Pre>
          {
`
class Counter extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }
  }

  render(){
    return (
      <div className='wrapper'>
        <span className='display'>
          {this.state.count}
        </span>
        <button>Add</button>
      </div>
    )
  }
}
`
          }
        </Pre>
      </Slide>
      <Slide>
        <div>
          <h3>Updating State</h3>
          <Pre>
            {
  `
  this.setState()
  `
            }
          </Pre>
        </div>
      </Slide>
      <Slide>
        <div>
          <h3>Updating State</h3>
          <Pre>
            {
  `
  this.setState({
    count: 1
  })
  `
            }
          </Pre>
        </div>
      </Slide>
      <Slide>
        <Pre>
          {
`
class Counter extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }
  }

  increment(){

  }

  render(){
    return (
      <div className='wrapper'>
        <span className='display'>
          {this.state.count}
        </span>
        <button onClick={this.increment.bind(this)}>Add</button>
      </div>
    )
  }
}
`
          }
        </Pre>
      </Slide>
      <Slide>
        <Pre>
          {
`
class Counter extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }
  }

  increment(){
    this.setState({
      count: this.state.count+1
    })
  }

  render(){
    return (
      <div className='wrapper'>
        <span className='display'>
          {this.state.count}
        </span>
        <button onClick={this.increment.bind(this)}>Add</button>
      </div>
    )
  }
}
`
          }
        </Pre>
      </Slide>
      <Slide>
        <h3>Don't 👏 mutate 👏 state 👏 directly</h3>
      </Slide>
      <Slide>
        <h3><C blue>3.2.2</C> React.Component Lifecycle</h3>
      </Slide>
      <Slide>
        <Pre>
          {
`
class Counter extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    // runs after markup is rendered
  }

  increment(){
    this.setState({
      count: this.state.count+1
    })
  }

  render(){
    return (
      <div className='wrapper'>
        <span className='display'>
          {this.state.count}
        </span>
        <button onClick={this.increment.bind(this)}>Add</button>
      </div>
    )
  }
}
`
          }
        </Pre>
      </Slide>
      <Slide>
        <ul>
          <li>componentWillMount - pre-render</li>
          <li>componentDidMount - after render</li>
          <li>componentWillUnmount - before component is removed from DOM</li>
          <li>componentWillReceiveProps - when the props passed to the component change</li>
          <li>componentWillUpdate - when either state OR props update</li>
          <li>componentDidUpdate - after props or state have been updated</li>
          <li>shouldComponentUpdate - inspect props and manually tell component whether or not to re-render</li>
          <li><a href='https://facebook.github.io/react/docs/react-component.html'><C blue>React.Component docs</C></a></li>
        </ul>
      </Slide>

      <Gif src='starwars'/>

      <Slide>
        <h1><C blue>4</C> Implementation</h1>
      </Slide>
      <Slide>
        <h2><C blue>4.1</C> Composition</h2>
      </Slide>
      <Slide>
        <Pre>
          {
`
// Containers.js
const Outer = ({ children }) => <div className='outer'>{children}</div>
`
          }
        </Pre>
      </Slide>
      <Slide>
        <Pre>
          {
`
// Containers.js
const Outer = ({ children }) => <section className='outer'>{children}</section>

const Container = ({ children }) => <div className='container--l mha'>{children}</div>
`
          }
        </Pre>
      </Slide>
      <Slide>
        <Pre>
          {
`
// Containers.js
const Outer = ({ children }) => <section className='outer'>{children}</section>

const Container = ({ children }) => <div className='container--l mha'>{children}</div>

const Wrapper = ({ children }) => (
  <Outer>
    <Container>
      {children}
    </Container>
  </Outer>
)
`
          }
        </Pre>
      </Slide>
      <Slide>
        <Pre>
          {
`
// App.js
import Counter from './lib/Counter.js'
import { Wrapper } from './lib/Containers.js'

export default props => (
  <Wrapper>
    <Counter/>
  </Wrapper>
)
`
          }
        </Pre>
      </Slide>
      <Slide>
        <ul>
          <li>components are like puzzle pieces</li>
          <li>don't worry about implementation details of each child</li>
          <li>each component is totally independent</li>
          <li>make changes in one place, propogate everywhere</li>
        </ul>
      </Slide>

      <Slide>
        <h2><C blue>4.2</C> Initiating App</h2>
      </Slide>
      <Slide>
        <Pre>
          {
`
import React from 'react'
import { render } from 'react-dom'

import App from './lib/App.js'

render(
  <App/>,
  document.getElementById('root')
)
`
          }
        </Pre>
      </Slide>
      <Slide>
        <Pre>
          {
`
<main id="root">
  <section class="outer">
    <div class="container--l mha">
      <div class="counter">
        <span class="display">0</span>
        <button>Add</button>
      </div>
    </div>
  </section>
</main>
`
          }
        </Pre>
      </Slide>

      <Slide>
        <h2><C blue>4.3</C> Inheritance</h2>
      </Slide>
      <Slide>
        <Pre>
          {
`
const stateless = props => {
  ...props.property...
}

class Stateful extends React.Component {
  ...this.props.property...
}
`
          }
        </Pre>
      </Slide>
      <Slide>
        <Flex>
        <Pre className='ph1 w12'>
          {
`
// index.js
render(
  <App initialCount='12'/>,
  document.getElementById('root')
)

// App.js
export default props => (
  <Wrapper>
    <Counter initialCount={props.initialCount}/>
  </Wrapper>
)
`
          }
        </Pre>
        <Pre className='ph1 w12'>
          {
`
// Counter.js
class Counter extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      count: this.props.initialCount || 0
    }
  }

  increment(){
    this.setState({
      count: this.state.count+1
    })
  }

  render(){
    return (
      <div className='wrapper'>
        <span className='display'>
          {this.state.count}
        </span>
        <button onClick={this.increment.bind(this)}>Add</button>
      </div>
    )
  }
}
`
          }
          </Pre>
        </Flex>
      </Slide>

      <Slide>
        <h2><C blue>5</C> React.Component Subclasses + Stateless Functional Components (and Higher Order Components)</h2>
      </Slide>
      <Slide>
        <Flex>
          <Pre className='ph1 w12'>
            {
  `
  // CounterView.js
  const Counter = ({ count, increment }) => (
    <div className='counter'>
      <span className='display'>
        {count}
      </span>
      <button onClick={increment}>Add</button>
    </div>
  )
  `
            }
          </Pre>
          <Pre className='ph1 w12'>
            {
  `

  // Counter.js
  class Counter extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        count: 0
      }
    }

    increment(){
      this.setState({
        count: this.state.count+1
      })
    }

    render(){
      return (
        <Wrapper>
          <CounterView count={this.state.count}/>
        </Wrapper>
      )
    }
  }
  `
            }
          </Pre>
        </Flex>
      </Slide>
      <Slide>
        <div>
          <h2>Don't 👏 use 👏 state 👏  if 👏 you 👏 don't 👏 have 👏 to</h2>
          <h3>Avoid overusing state. Minimize stateful surface area. Pure functions FTW. 🔥</h3>
        </div>
      </Slide>

      <Gif src='carlton'/>

      <Slide>
        <h1><C blue>FAQ</C> in no particular order</h1>
      </Slide>
      <Slide>
        <h2><C blue>?</C> Why is everything in one file a good thing?</h2>
      </Slide>
      <Slide>
        <ul>
          <li>independence during development</li>
        </ul>
      </Slide>
      <Slide>
        <ul>
          <li>independence during development</li>
          <li>maintenance is easier, one location</li>
        </ul>
      </Slide>
      <Slide>
        <ul>
          <li>independence during development</li>
          <li>maintenance is easier, one location</li>
          <li>sharability, reusability</li>
        </ul>
      </Slide>
      <Slide>
        <ul>
          <li>independence during development</li>
          <li>maintenance is easier, one location</li>
          <li>sharability, reusability</li>
          <li>code splitting 💯</li>
        </ul>
      </Slide>

      <Slide>
        <h2><C blue>?</C> Can I reference the DOM nodes themselves?</h2>
      </Slide>
      <Slide>
        <div>
          <h3><C blue>Yeah, but:</C></h3>
          <p>It's important to try to keep references to a minimum because they open you up to mutations external to React. If the virtual DOM and the real DOM get out of sync, weird stuff can happen.</p>
        </div>
      </Slide>

      <Slide>
        <h2><C blue>?</C> Are there patterns that I'm required to use?</h2>
      </Slide>
      <Slide>
        <div>
          <h3><C blue>A couple:</C></h3>
          <ul>
            <li>capitalize component names i.e. Outer, Counter, etc</li>
            <li>every tag needs to be closed, even things like {`<hr/>`} and {`<br/>`}</li>
          </ul>
        </div>
      </Slide>

      <Slide>
        <h2><C blue>?</C> What's the best way to learn React?</h2>
      </Slide>
      <Slide>
        <h3>Read the <a href='https://facebook.github.io/react/docs/hello-world.html'><C blue>docs</C></a> 🔑</h3>
      </Slide>

      <Slide>
        <h2><C blue>?</C> How can I play around with it on my own?</h2>
      </Slide>
      <Slide>
        <div>
          <h3>The React team made a <a href='https://jsfiddle.net/reactjs/69z2wepo/'><C blue>base JSFiddle</C></a></h3>
          <h3>Or I have a out-of-the-box setup <a href='https://github.com/estrattonbailey/frame'><C blue>called Frame</C></a></h3>
        </div>
      </Slide>

      <Gif src='end'/>

      <Slide/>

    </Deck>
  )
}
