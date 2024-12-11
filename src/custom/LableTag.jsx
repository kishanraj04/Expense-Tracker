import React from 'react'

function LableTag({value}) {
  return (
    <>
    <label htmlFor={value} className='font-serif text-2xl text-white font-extralight font-bold'>{value}</label>
    </>
  )
}

export default LableTag