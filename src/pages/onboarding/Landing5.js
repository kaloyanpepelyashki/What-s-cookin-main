import { useNavigate } from "react-router-dom";

export default function Landing5() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing6")
  }
 
return (
    <div>
      <h1>Scan page 3</h1>
      <button onClick={handleClick}>go to landing 6</button>
    </div>
)


}