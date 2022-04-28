import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
