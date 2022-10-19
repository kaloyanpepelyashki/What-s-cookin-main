import { useNavigate } from "react-router-dom";

export default function Landing2() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing3")
  }
 
return (
    <div>
      <h1>Preferences Page</h1>
      <button onClick={handleClick}>go to landing 3</button>
    </div>
)


}