import React from 'react'

export default ({level, className, children}) => {
  console.log(level)
  switch(level){
    case 1:
      return <h1 className={className}>{children}</h1>
      break;
    case 3:
      return <h3 className={className}>{children}</h3>
      break;
    default: 
      return <h1 className={className}>{children}</h1>
      break;
  }
}
