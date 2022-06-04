import './App.css';
import HomeComponent from './pages/Home/HomeComponent';
import UpdateComponent from './pages/Update/Updatecomponent';
import DeleteComponent from './pages/Delete/DeleteComponent';
import ViewComponent from './pages/View/ViewComponent';
function App() {
  return (
    <div>
      <HomeComponent/>
      <UpdateComponent/>
      <DeleteComponent/>
      <ViewComponent/>
    </div>
  );
}

export default App;
