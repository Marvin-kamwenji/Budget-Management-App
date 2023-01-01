import './Header.css';

function Header() {
return(
    <div>
       <div className="heading">
         <h1>My Budget Planner</h1>
       </div>

       <div className="budget-numbers">
        <div className="budget">
            <h5 className="heading-labels">Budget:</h5>
            <h5 className="heading-labels available">kshs 2000</h5>
            <button className="edit-button"> Edit </button>
        </div>
        <div className="remaining">
            <h5 className="heading-labels">Remaining:</h5>
            <h5 className="heading-labels balance">Kshs 1000</h5>
        </div>
        <div className="spent-so-far">
            <h5 className="heading-labels">Spent so far: </h5>
            <h5 className="heading-labels spending">Kshs 250</h5>
        </div>
       </div>
    </div>

)
}

export default Header;