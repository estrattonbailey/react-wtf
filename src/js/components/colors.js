import React from 'react'

export default ({ children, blue, green }) => {
  if (blue){
    return <span className='c1'>{children}</span>
  }
  if (green){
    return <span className='c2'>{children}</span>
  }
}
