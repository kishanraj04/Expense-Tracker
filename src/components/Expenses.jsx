import React, { useState } from "react";
import LableTag from "../custom/LableTag";
import InputTag from "../custom/InputTag";
import { handleFormSubmit } from "../../utils/handleFormSubmit";
import Td from "../custom/Td";
import Th from "../custom/Th";

function Expenses() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  if(JSON.parse(localStorage.getItem('expenses'))==null)
  {
    localStorage.setItem('expenses',JSON.stringify([]))
  }
  const [expense, setExpense] = useState(JSON.parse(localStorage.getItem('expenses')));
  
 
  const handle = (e) => {
    e.preventDefault();
    handleFormSubmit(title, setTitle, category, setCategory, price, setPrice, expense, setExpense);
  };

  return (
    <div className="flex gap-5 w-[80%] justify-evenly items-center">
      <form
        action=""
        className="w-[40%] h-[15rem] flex justify-center items-center border-[2px]"
        onSubmit={handle}
      >
        <div>
          <tr className="w-[100%]">
            <td className="w-[50%]">
              <LableTag value={"Title"} />
            </td>
            <td>
              <InputTag value={title} setValue={setTitle} />
            </td>
          </tr>

          <tr className="w-[100%]">
            <td>
              <LableTag value={"Category"} />
            </td>
            <td>
              <InputTag value={category} setValue={setCategory} />
            </td>
          </tr>

          <tr className="w-[100%]">
            <td>
              <LableTag value={"Price"} />
            </td>
            <td>
              <InputTag value={price} setValue={setPrice} />
            </td>
          </tr>

          <tr>
            <td>
              <button className="font-serif text-2xl border-[2px] w-[10rem]">
                Add
              </button>
            </td>
          </tr>
        </div>
      </form>

      <div className="h-[15rem]  w-[60%] overflow-y-scroll">
      <table className="border-[2px] w-[100%] h-[10rem] ">
        <thead>
          <tr className="border-[2px]">
          <Th value={['Title','Category','Price']}/>
          </tr>
        </thead>
        <tbody>
          {expense==null ? <h1>Please Add Item</h1>: expense.map((exp, index) => (
            <tr key={index} className="border-[2px]">
              <td className="border-[2px]">{exp.Title}</td>
              <td className="border-[2px]">{exp.Category}</td>
              <td className="border-[2px]">{exp.Price}</td>
            </tr>
          ))}

          <tr className="border-[2px]">
            {
                <Td value={['','Total','0']}/>
            }
           
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Expenses;
