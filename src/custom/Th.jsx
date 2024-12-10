import React from 'react'

function Th({value}) {
  return (
    <>
    {
        value.map((value)=> <th  className="border-[2px]">{value}</th>)
    }
    </>
  )
}

export default Th