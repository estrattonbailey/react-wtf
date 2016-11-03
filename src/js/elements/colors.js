import React from 'react'

export default ({ children, blue }) => {
  if (blue){
    return <span className='c1'>{children}</span>
  }
}
