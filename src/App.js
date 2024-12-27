import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Page from "./components/Page";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); 

  const handleLogout = () => {
    setLoggedInUser(null); 
  };

  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Login users={users} setLoggedInUser={setLoggedInUser} />} />
            <Route path="/signup" element={<Signup setUsers={setUsers} />} />
            <Route path="/page" element={loggedInUser ? <Page username={loggedInUser} onLogout={handleLogout} /> : <Navigate to="/" />} />
            <Route path="/card1" element={<Card1 />} />
            <Route path="/card2" element={<Card2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;