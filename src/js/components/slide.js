import React, { PropTypes } from 'react'
import cx from 'classnames'

export default ({ children, active, centered, valign }) => {
  const c = cx('slide flex flex-wrap flex-items-center', {
  })

  return (
    <section className={c}>
      {children}
    </section>
  )
}
