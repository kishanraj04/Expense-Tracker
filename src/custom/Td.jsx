import React from 'react'

function Td({value}) {
  return (
    <>
    {
        value.map((value)=> <td  className="border-[2px]">{value}</td>)
    }</>
  )
}

export default Td