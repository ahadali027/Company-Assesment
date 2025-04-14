import React from 'react'

function FormHeader({heading, subHeading}) {
  return (
    <div className='bg-primary-blue p-3 sm:p-4 md:p-5 rounded-t-lg'>
        <p className='text-white text-sm sm:text-md md:text-lg font-medium'>{heading}</p>
        {subHeading && (
          <p className='text-white text-xs sm:text-sm md:text-base mt-1 sm:mt-2 font-medium'>{subHeading}</p>
        )}
    </div>
  )
}

export default FormHeader