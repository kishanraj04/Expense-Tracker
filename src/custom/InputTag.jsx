import React from 'react'

function InputTag({ name, reference }) {
  return (
    <input
      ref={reference}
      type="text"
      name={name}
      className="border-[2px] bg-transparent font-serif text-xl"
      required
    />
  )
}

export default InputTag;
