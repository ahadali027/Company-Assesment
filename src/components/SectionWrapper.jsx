import React from 'react'

function SectionWrapper({children}) {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>{children}</div>
  )
}

export default SectionWrapper