import React, { useRef, useState } from "react";
import LableTag from "../custom/LableTag";
import InputTag from "../custom/InputTag";
import { handleFormSubmit } from "../../utils/handleFormSubmit";
import Td from "../custom/Td";
import Th from "../custom/Th";
import { MdDelete } from "react-icons/md";
import { deleteRow } from "../../utils/deleteRow";
import Menu from "../custom/Menu";

function Expenses() {
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);

  if (JSON.parse(localStorage.getItem("expenses")) == null) {
    localStorage.setItem("expenses", JSON.stringify([]));
  }
  const [expense, setExpense] = useState(
    JSON.parse(localStorage.getItem("expenses"))
  );

  const handle = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const category = categoryRef.current.value;
    const price = priceRef.current.value;
    handleFormSubmit(title, category, price, expense, setExpense);
  };

 
  return (
    <div className="flex gap-5 w-[80%] justify-evenly items-center">
      <form
        action=""
        className="w-[40%] h-[15rem] flex justify-center items-center bg-cover bg-center bg-opacity-20 rounded-md bg-clip-padding backdrop-blur-sm bg-white/30 border-[2px] border-gray-200 shadow-lg"
        onSubmit={handle}
      >
        <div>
          <table className="w-full">
            <tbody>
              <tr className="w-full">
                <td className="w-[50%]">
                  <LableTag value={"Title"} />
                </td>
                <td>
                  <InputTag reference={titleRef} />
                </td>
              </tr>

              <tr className="w-full">
                <td>
                  <LableTag value={"Category"} />
                </td>
                <td>
                  
                  <Menu value={["Grocery","Electric Bille","Food","Education","Cloths"]} reference={categoryRef} />
                </td>
              </tr>

              <tr className="w-full">
                <td>
                  <LableTag value={"Price"} />
                </td>
                <td>
                  <InputTag reference={priceRef} />
                </td>
              </tr>

              <tr>
                <td>
                  <button className="font-serif text-2xl border-[2px] w-[10rem] bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors duration-300">
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>

      <div className="h-[15rem] w-[60%] overflow-y-scroll border-[2px]">
        <table className="w-[100%] h-[10rem] bg-white/30 backdrop-blur-xl rounded-md border-[2px] border-gray-200 shadow-lg">
          <thead>
            <tr className="border-[2px]">
              <Th value={["Title",<Menu value={["All","Grocery","Electric Bille","Food","Education","Cloths"]} flag={true} expense={expense} setExpense={setExpense}/>, "Price", "delete"]} />
            </tr>
          </thead>
          <tbody>
            {expense == null ? (
              <h1>Please Add Item</h1>
            ) : (
              expense.map((exp, index) => (
                <tr key={index} className="border-[2px]">
                  <td className="border-[2px] text-center text-white font-serif">
                    {exp.Title}
                  </td>
                  <td className="border-[2px] text-center text-white font-serif">
                    {exp.Category}
                  </td>
                  <td className="border-[2px] text-center text-white font-serif">
                    {exp.Price}
                  </td>
                  <td
                    className="flex justify-center text-white items-center font-serif h-full w-full"
                    id={exp.id}
                    onClick={(e)=> deleteRow(e,setExpense)}
                  >
                    <MdDelete color="red" size={"2rem"} />
                  </td>
                </tr>
              ))
            )}

            <tr className="border-[2px]">
              {<Td value={["", "Total", "0"]} />}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Expenses;
