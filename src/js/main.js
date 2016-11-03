import React from 'react'
import { render } from 'react-dom'
import Prez from './components'

console.groupCollapsed('😎')
console.log(`Built by https://github.com/estrattonbailey who probably shouldn't even be allowed to present on this.`)
console.log(`Source: https://github.com/estrattonbailey/vim-lol`)
console.groupEnd()

render(<Prez/>, document.getElementById('root'))
