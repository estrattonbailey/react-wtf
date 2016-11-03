import React from 'react'

import Deck from './deck'
import Slide from './slide'
import Gif from './gif'
import C from '../elements/colors'

export default props => {
  return (
    <Deck>
      <Slide>
        <h1><C blue>vim</C> lol</h1>
      </Slide>
      <Slide>
        <h1>what is vim?</h1>
      </Slide>

      <Gif src='bubbles'/>

      <Slide>
        <h3>it's a text editor</h3>
      </Slide>
      <Slide>
        <h1>why is vim?</h1>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>spend less time coding</li>
        </ul>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>spend less time coding</li>
          <li>spend less time coding</li>
        </ul>
      </Slide>

      <Gif src='bros'/>

      <Slide>
        <h1><C blue>2.</C> Modes</h1>
      </Slide>
      <Slide>
        <div className="w1">
          <h2><C blue>Normal</C></h2>
          <ul className='h3'>
            <li>esc - enter normal mode</li>
          </ul>
        </div>
      </Slide>
      <Slide>
        <div className="w1">
          <h2><C blue>Visual</C></h2>
          <ul className='h3'>
            <li>v - select character (enter visual mode)</li>
            <li>V - select entire line</li>
          </ul>
        </div>
      </Slide>
      <Slide>
        <div className="w1">
          <h2><C blue>Insert</C></h2>
          <ul className='h3'>
            <li>i - enter insert mode</li>
            <li>a - move char to right, enter insert mode</li>
          </ul>
        </div>
      </Slide>

      <Slide>
        <h1><C blue>1.</C> Movement</h1>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>h - left</li>
          <li>j - down</li>
          <li>k - up</li>
          <li>l - right</li>
          <li>e - end of word</li>
          <li>b - beginning of word</li>
          <li>gg - go to top of file</li>
          <li>G - go to bottom of file</li>
        </ul>
      </Slide>

      <Slide>
        <h1><C blue>3.</C> Editing a File</h1>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>y - yank (copy) text</li>
          <li>p - paste text</li>
        </ul>
      </Slide>
      <Slide>
        <div className='w1'>
          <ul className='h3'>
            <li>y - yank (copy) text</li>
            <li>p - paste text</li>
          </ul>
          <div className='h5'><C blue>usually yanks to register...</C></div>
        </div>
      </Slide>
      <Slide>
        <div className='w1'>
          <div className='h3'><C blue>Using registers</C></div>
          <ul className='h3'>
            <li>{'"<register>[y|p]'}</li>
            <li>example: {'"ay'} - yanks to "a" register</li>
            <li>example: {'"*y'} - yanks to "*" register (system clipboard)</li>
            <li>example: {'"ap'} - pastes from "a" register</li>
          </ul>
        </div>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>x - delete character under cursor</li>
          <li>dd - delete entire line</li>
          <li>r - replace character under cursor</li>
        </ul>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>:w - write file</li>
          <li>:q - close file</li>
          <li>:wq - write and close file</li>
        </ul>
      </Slide>

      <Gif src='groove'/>

      <Slide>
        <h1><C blue>4.</C> Searching</h1>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>/ - begin search</li>
          <li>// - clear search (:noh)</li>
          <li>n - next instance of search term</li>
          <li>N - previous instance of search term</li>
          <li>* - highlight other instances of word under cursor</li>
          <li>/+{'<up arrow>'} - move through previous searches</li>
        </ul>
      </Slide>
      <Slide>
        <div className="w1">
          <h2><C blue>:vimgrep</C></h2>
          <ul className='h3'>
            <li>{':vimgrep /<pattern>/g <glob>'}</li>
            <li>:cn - next match</li>
          </ul>
        </div>
      </Slide>

      <Slide>
        <h1><C blue>5.</C> Whoops</h1>
      </Slide>
      <Gif src='farley'/>
      <Slide>
        <ul className='h3'>
          <li>u - undo</li>
          <li>Ctrl+r - redo</li>
        </ul>
      </Slide>

      <Slide>
        <h1><C blue>6.</C> Advanced Movement 😎</h1>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>$ - go to end of line</li>
          <li>A - go to end of line, enter insert mode</li>
          <li>0 - go to beginning of line</li>
          <li>o - add line above</li>
          <li>O - add line below</li>
          <li>H - move cursor to top of window</li>
          <li>L - move cursor to bottom of window</li>
          <li>Ctrl+o - go to previous location</li>
          <li>Ctrl+i - go to next location</li>
        </ul>
      </Slide>

      <Gif src='prince'/>

      <Slide>
        <h1><C blue>7.</C> Developing Stuff</h1>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>:Ex - enter file explorer</li>
        </ul>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>tn - create a new tab</li>
          <li>gt - go to next tab</li>
          <li>gT - go to previous tab</li>
          <li>{'<n>'}gT - go to {'n'} tab</li>
        </ul>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>vv - create vertical split</li>
          <li>ss - create horizontal split</li>
          <li>Ctrl+w+{'[hjkl]'} - navigate between splits</li>
        </ul>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>,js - enter fuzzy finder</li>
        </ul>
      </Slide>

      <Slide>
        <h1><C blue>8.</C> Terminal Tips</h1>
      </Slide>
      <Slide>
        <ul className='h3'>
          <li>Cmd+Shift+{'[left|right]'} - move between terminal window tabs</li>
          <li>Cmd+{'[left|right]'} - move between terminal windows</li>
        </ul>
      </Slide>

      <Gif src='werk'/>

      <Slide>
        <h1><C blue>8.</C> Resources</h1>
      </Slide>
      <Slide>
        <div className='w1 h4'>
          <div>$ vimtutor</div>
          <div><a href='http://vim-adventures.com/'>Vim Adventures</a> - learn vim while playing a game!</div>
          <div><a href='http://designbytyping.com/'>Design By Typing</a> - screencasts on using vim and more</div>
          <div><a href='https://www.vimgifs.com/'>Vimgifs</a> - gifs... of vim</div>
          <div>don't forget plugins for Sublime and Atom!</div>
        </div>
      </Slide>

      <Slide>
        <h1><C blue>just keep vimming 😆</C></h1>
      </Slide>
      <Gif src='thunder'/>
    </Deck>
  )
}
