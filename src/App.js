import './App.css';
import ListProduct from './ListProduct/ListProduct';
import {products} from "./data"
function App() {
  return (
    <div className="App">
      <ListProduct prods={products}></ListProduct>
    </div>
  );
}

export default App;
