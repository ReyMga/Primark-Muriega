import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemCount stock={10} cantidad={2} initial={1}/>
      <ItemListContainer greeting="El carrito de compras está vacío"/>
    </div>
  );
}

export default App;