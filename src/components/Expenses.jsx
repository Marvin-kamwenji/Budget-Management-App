import './Expenses.css';
import React, {useState} from 'react';

function Expenses(){
    cont [input, setInput] = useState("");


return(
    <div className="expenses-container">
        <div className="expenses-list">
          <h3>Expenses</h3>
           <input type="text" placeholder="Type of search" />
        </div>
        <div className="add-expense">
            <h3>Add Expense</h3>
            <form>
               <label>
                  Name:
                  <input type="text" name="Name" />
              </label>

              <label>
                  Cost:
                  <input type="text" name="Cost" />
              </label>
              <br />
              <input type="submit" value="Submit" />
           </form>

        </div>


    </div>
);
}

export default Expenses;