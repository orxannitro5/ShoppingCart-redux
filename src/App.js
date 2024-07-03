import './App.css';
import Header from './Header';
import Home from "./home"
import Checkout from './Checkout';
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/checkout' element={<><Header /><Checkout /></>}></Route>
        <Route path='/' element={<><Header /><Home /></>}></Route>

      </Routes>
    </Router>
      
    </>
  );
}

export default App;
