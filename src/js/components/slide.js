import React, { PropTypes } from 'react'
import cx from 'classnames'

export default ({ children, active, centered, valign }) => {
  return (
    <section className='super slide flex flex-wrap flex-items-center'>
      {children}
    </section>
  )
}
