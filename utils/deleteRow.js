export function deleteRow(e,setExpense)
{
    const rowId = e.target.closest('td').id;
    const localStorageData = JSON.parse(localStorage.getItem('expenses'))
    const filterData = localStorageData.filter((expense)=>
    {
       return rowId!=expense.id
    })
    localStorage.setItem('expenses',JSON.stringify(filterData))
    setExpense(filterData)
}