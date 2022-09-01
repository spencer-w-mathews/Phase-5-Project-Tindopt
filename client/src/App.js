import { useEffect, useState } from "react";
import Header from './Header'
import PetCards from './PetCards';
import Auth from "./Auth";
import SwipeButtons from './SwipeButtons';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SavedPets from "./SavedPets";


function App() {
  const [user, setUser] = useState(null);
  const [userPets, setUserPets] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if(!user) return <Auth setUser={setUser} />
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={user == null ? <Navigate to="/login" replace/> : <Navigate to="/tindopt" replace/>} />
            <Route path="login" element={<Auth />} />
            <Route path="tindopt" element={<PetCards user={user} userPets={userPets} setUserPets={setUserPets} />} />
            <Route path="favorites" element={<SavedPets user={user}/>}/>
          </Routes>
        </BrowserRouter>
     
        
    </div>
  );
}

export default App;

