import React from 'react'

function InputTag({ name, reference }) {
  return (
    <input
      ref={reference}
      type="text"
      name={name}
      className="border-[2px] w-[100%] bg-transparent font-serif text-xl text-yellow-300"
      required
    />
  )
}

export default InputTag;
