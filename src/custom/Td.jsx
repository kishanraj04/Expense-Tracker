import React from 'react'

function Td({value}) {
  return (
    <>
    {
        value.map((value)=> <td  className="border-[2px]  text-center">{value}</td>)
    }</>
  )
}

export default Td