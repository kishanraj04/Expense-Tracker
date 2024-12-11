import React, { useEffect } from 'react'

function Menu({value,reference,flag,setExpense}) {


    const handleMenu = (e)=>
        {

            const expense = JSON.parse(localStorage.getItem('expenses'))
            if(flag)
                {
                  
                 if(e.target.value=="All")
                 {
                     setExpense(expense)
                     return
                 }
                const filteredValue =  expense.filter((items)=>
                 {
                   
                     return items.Category==e.target.value 
                 })
                 setExpense(filteredValue)
                }
           
        }
  

  return (
    <>
      <select name="" id="" className='w-full bg-transparent text-white border-[2px]' ref={reference} onChange={handleMenu}>
      {
        value.map((item,idx)=> <option value={item} key={idx} className='text-center border-[1px] text-black font-bold'>{item}</option>)
      }
      </select>
    </>
  )
}

export default Menu