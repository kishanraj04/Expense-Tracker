import React, { useState } from 'react'
import { use } from 'react'

function InputTag({name,value,setValue}) {

  
  return (
    <>
      <input type="text" name={name} className='border-[2px] bg-transparent font-serif text-xl' required value={value} onChange={(e)=>
        {
          setValue(e.target.value)
        }
      }/>
    </>
  )
}

export default InputTag