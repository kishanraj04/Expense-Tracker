export function handleFormSubmit(title, setTitle, category, setCategory, price, setPrice, expense, setExpense) {
    setExpense((prev) => [
      ...prev,
      { 'Title': title, 'Category': category, 'Price': price }
    ]);
    console.log(expense);
    localStorage.setItem('expenses',JSON.stringify(expense))
    // setTitle('');
    // setCategory('');
    // setPrice('');
  }
  