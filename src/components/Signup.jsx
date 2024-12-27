import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup({ setUsers }) { 
  const navigate = useNavigate();
  const [eusername, setEusername] = useState("");
  const [epassword, setPassword] = useState("");

  const handleUInput = (evt) => {
    setEusername(evt.target.value);
  };

  const handlePInput = (evt) => {
    setPassword(evt.target.value);
  };

  const addUser = () => {
    setUsers(previousUsers => [...previousUsers, { username: eusername, password: epassword }]); 
    navigate("/"); 
  };

  return (
    <div>
      <h1>Hey Hi</h1>
      <p>Sign Up here :)</p>

      <div>
        <input
          type="text"
          className="column"
          placeholder="Username"
          onChange={handleUInput}
        />
        <input
          type="text"
          className="column"
          placeholder="Password"
          onChange={handlePInput}
        />
        <input
          type="text"
          className="column"
          placeholder="Confirm Password"
          onChange={handlePInput}
        />
        <button id="yellow" onClick={addUser}>Sign Up</button>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;