import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ users, setLoggedInUser }) {
  const navigate = useNavigate();
  const [eusername, setEusername] = useState("");
  const [epassword, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUInput = (evt) => {
    setEusername(evt.target.value);
  };

  const handlePInput = (evt) => {
    setPassword(evt.target.value);
  };

  const checkUser = () => {
    const userFound = users.find(user => user.username === eusername && user.password === epassword);

    if (userFound) {
      console.log("Login successful");
      setLoggedInUser(eusername);
      navigate("/page");
    } else {
      console.log("Login Failed");
      setErrorMessage("Please Sign Up before login");
    }
  };

  return (
    <div>
      <h1>Hey Hi</h1>
      {!errorMessage && <p>I help you manage your activities after you login :)</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <input
          type="text"
          placeholder="Username"
          className="column"
          onChange={handleUInput}
        />
        <input
          type="text"
          placeholder="Password"
          className="column"
          onChange={handlePInput}
        />
        <button 
          onClick={checkUser} 
          className="column" 
          disabled={!eusername || !epassword} 
        >
          Login
        </button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;