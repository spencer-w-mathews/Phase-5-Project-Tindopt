import { useEffect, useState } from "react";
import Header from './Header'
import ShelterHeader from "./ShelterHeader";
import ShelterAnimals from "./ShelterAnimals";
import PetCards from './PetCards';
import Auth from "./Auth";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SavedPets from "./SavedPets";
import NewAnimalForm from "./NewAnimalForm";


function App() {
  const [user, setUser] = useState(null);
  
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if(!user) return <Auth setUser={setUser} />
  
  if(user.user_or_shelter==="user"){
  return(
    <div className="App">
      <Header setUser={setUser} user={user} />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={user == null ? <Navigate to="/login" replace/> : <Navigate to="/tindopt" replace/>} />
            <Route path="tindopt" element={<PetCards user={user}/>} />
            <Route path="favorites" element={<SavedPets user={user.favorites}/>}/>
          </Routes>
        </BrowserRouter>
     
        
    </div>
  );}else{ return(
    <div className="App">
      <ShelterHeader setUser={setUser} user={user} />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={user == null ? <Navigate to="/login" replace/> : <Navigate to="/newAnimal" replace/>} />
            {/* <Route path="login" element={<Auth />} /> */}
            <Route path="newAnimal" element={<NewAnimalForm user={user}/>} />
            <Route path="animals" element={<ShelterAnimals user={user}/>}/>
          </Routes>
        </BrowserRouter>
     
        
    </div>)}
}

export default App;

