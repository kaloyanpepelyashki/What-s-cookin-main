import { useNavigate } from "react-router-dom";

export default function Landing3() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing4")
  }
 
return (
    <div>
      <h1>Scan page 1</h1>
      <button onClick={handleClick}>go to landing 4</button>
    </div>
)


}