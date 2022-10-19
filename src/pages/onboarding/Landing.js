import { useNavigate } from "react-router-dom";

export default function Landing() {
//The useNavigate hook returns a on click function that lets you navigate to next page 
  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing2")
  }
  
return (
    <div>
     
      <h1>The landing Page</h1>
        <button onClick={handleClick}>go to preferences page</button>
    </div>
)



}