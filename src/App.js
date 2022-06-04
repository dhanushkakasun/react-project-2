import './App.css';
import HomeComponent from './pages/Home/HomeComponent';
import UpdateComponent from './pages/Update/Updatecomponent';
import DeleteComponent from './pages/Delete/DeleteComponent';
import ViewComponent from './pages/View/ViewComponent';
import NavBar from "./components/Navigation/NavBar";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<HomeComponent/>}/>
        <Route path="/update" element={<UpdateComponent/>}/>
        <Route path="/delete" element={<DeleteComponent/>}/>
        <Route path="/view" element={<ViewComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
