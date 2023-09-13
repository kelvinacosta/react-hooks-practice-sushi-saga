import React,{useState} from "react";

function Sushi({sushi,dollars,setDollars}) {
  
  const {id,name, img_url, price , created_at} = sushi
  
  const [isEaten,setIsEaten] = useState(true)
  

  const handleClickPlate = ()=> {
    // setIsEaten(!isEaten)
    if(isEaten){
      if(dollars>=price){
        setDollars(dollars-price)
        setIsEaten(isEaten)
      }else{
        console.log("Not enough budget!")
      }
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClickPlate}>
        {/* Tell me if this sushi has been eaten! */}
        {!isEaten ? null : (
          <img
            src={ img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
