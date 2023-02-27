import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import ShopConntextProvider from './Context/ShopContext'
function App() {
  return (
    <ShopConntextProvider>
    <div className='App'>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart'element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
    </ShopConntextProvider>
  );
}

export default App;
