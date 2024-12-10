export function handleFormSubmit(title, category, price, expense, setExpense) {
  const newItem = { 'id': crypto.randomUUID(), 'Title': title, 'Category': category, 'Price': price };

  setExpense((prev) => {
    const updatedExpenses = [...prev, newItem];
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    return updatedExpenses;
  });
}
