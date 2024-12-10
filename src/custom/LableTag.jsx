import React from 'react'

function LableTag({value}) {
  return (
    <>
    <label htmlFor={value} className='font-serif text-2xl'>{value}</label>
    </>
  )
}

export default LableTag