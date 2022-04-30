
import './App.css';
import AddUserform from './pages/AddUserform';
import EditUserForm from './pages/EditUserForm';
import Home from './pages/Home';
import {BrowserRouter, Routes,Route} from"react-router-dom"


function App() {
  return (
    <div className="container">

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-user" element={ <AddUserform />} />
      <Route path="/edit-user/:userId" element={<EditUserForm /> } />
      <Route path="*" element= {<h3 style={{color:"red", textAlign:"center"}}>404: PAGE NOT FOUD</h3>} />
        
      </Routes>
      </BrowserRouter>
     
      
     
    </div>
  );
}

export default App;
