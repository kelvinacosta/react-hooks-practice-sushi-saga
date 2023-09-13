import React,{useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis,dollars,setDollars}) {
  //Create a state and initialize to 0
  const [startIndex,setStartIndex] = useState(0);
  //Call slice function to get the 4 sushies at a time
  const sushiList = sushis.slice(startIndex,startIndex+4).map(sushi => <Sushi key={sushi.id} sushi={sushi} dollars={dollars} setDollars={setDollars}/>)
  
  const handleClickButton = ()=>{
    setStartIndex(startIndex+4)
    
  }

  return (
    <div className="belt">
      {sushiList}
      <MoreButton onClickSushiButton={handleClickButton}/>
    </div>
  );
}

export default SushiContainer;
