import React from 'react'

function Th({value}) {
  return (
    <>
    {
        value.map((value)=> <th  className="border-[2px] text-center">{value}</th>)
    }
    </>
  )
}

export default Th