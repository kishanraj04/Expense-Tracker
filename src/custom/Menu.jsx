import React from 'react'

function Menu({value}) {
  return (
    <>
      <select name="" id="">
      {
        value.map((item)=> <option value={item}>{item}</option>)
      }
      </select>
    </>
  )
}

export default Menu