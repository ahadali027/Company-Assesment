import React from 'react'

function FormHeader({heading, subHeading}) {
  return (
    <div className='bg-primary-blue p-4'>
        <p className='text-white text-md font-medium'>{heading}</p>
        <p className='text-white text-sm mt-2 font-medium'>{subHeading}</p>
    </div>
  )
}

export default FormHeader