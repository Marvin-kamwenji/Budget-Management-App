import './Expenses.css';
import React, {useState} from 'react';

function Expenses(){
    const [expenseName, setExpenseName] = useState("");
    const [expenseCost, setExpenseCost] = useState("");

    function handleExpenseNameChange(e){
      setExpenseName(e.target.value);  
    }

    function handleExpenseCostChange(e){
        setExpenseCost(e.target.value);
    }

    function onAddExpenseClick(){
        setExpenseName("");
        setExpenseCost("");
    }


return(
    <div className="expenses-container">
        <div className="expenses-list">
          <h3>Expenses</h3>
           <input type="text" placeholder="Type of search" />
           <p>Name:{ expenseName}       cost: {expenseCost}</p>
        </div>
        <div className="add-expense">
            <h3>Add Expense</h3>
            <form>
               <label>
                  Name:
                  <input type="text" name="Name" value={expenseName} onChange={handleExpenseNameChange}/>
              </label>

              <label>
                  Cost:
                  <input type="text" name="Cost" value={expenseCost} onChange={handleExpenseCostChange} />
              </label>
              <br />
              <button onClick={onAddExpenseClick}>Add Expense</button>
           </form>

        </div>


    </div>
);
}

export default Expenses;