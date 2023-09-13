import React,{useState,useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  
const [sushis,setSushis] = useState([]);
const [dollars, setDollars] = useState(100);

useEffect(()=>{
  fetch(API)
  .then(response=>response.json())
  .then(data=>setSushis(data))
  .catch(err=> console.error("Error getting sushies!",err))
},[])
  
  
  return (
    <div className="app">
      <SushiContainer sushis={sushis} dollars={dollars} setDollars={setDollars}/>
      <Table dollars={dollars}/>
    </div>
  );
}

export default App;

// Deliverables
// Inspectors will be coming by to check that our patented Sushi Saga conveyor belt is working properly! Oh no! They will be checking the following:

// The sushi list is properly received from the server and displayed in our app.

// Only 4 sushi are rendered at a time.

// Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to be concerned about what happens when you reach the end of the sushi list.

// Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.

// We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component.

// No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance.
