import { useNavigate } from "react-router-dom";

export default function Landing4() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing5")
  }
 
return (
    <div>
      <h1>Scan page 2</h1>
      <button onClick={handleClick}>go to landing 5</button>
    </div>
)


}