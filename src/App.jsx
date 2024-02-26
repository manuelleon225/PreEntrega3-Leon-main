import Banner from "./components/Banner"
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartContextProvider from "./components/CartContext";
import Checkout from "./components/CheckOut";


const App = () => {
  return (
    <CartContextProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer  limit="1" />}/>
        <Route path="/category/:id" element={<ItemListContainer limit="0"/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/checkout"} element={<Checkout />} />
      </Routes>
      <Banner />
    </Router>
    </CartContextProvider>
  );
};

export default App