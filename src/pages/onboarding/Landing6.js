import { useNavigate } from "react-router-dom";


export default function Landing6() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/home")
  }
 
return (
    <div>
      <h1>sign up done</h1>
      <button onClick={handleClick}>Start Saving Money</button>
    </div>
)


}