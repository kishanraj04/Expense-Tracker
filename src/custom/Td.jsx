import React from 'react'

function Td({value}) {
  return (
    <>
    {
        value.map((value,idx)=> <td key={idx} className="border-[2px] text-white text-center">{value}</td>)
    }</>
  )
}

export default Td