export function filterPrice(expense,setExpense,sortType)
{
    if(sortType=='dsc')
    {
        const sortedAscending = expense.sort((a, b) => parseInt(b.Price)-parseInt(a.Price));
        setExpense([...sortedAscending])
    }
    else
    {
        const sortedAscending = expense.sort((a, b) => parseInt(a.Price)-parseInt(b.Price));
        setExpense([...sortedAscending])
    }
}