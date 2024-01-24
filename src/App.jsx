import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Catalog from './pages/Catalog';
import DistributorsList from './pages/DistributorsList.jsx';
import { GlobalDataProvider } from './context/GlobalDataProvider';
import EditDistributor from './pages/EditDistributor';
import AddDistributor from './pages/AddDistributor';
import Upload from './pages/Upload';

function App() {
  return (
    <>
    <GlobalDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/distributors' element={<DistributorsList />} />
          <Route path="/edit/:id" element={<EditDistributor />} />
          <Route path="/add" element={<AddDistributor />} />
          <Route path="/upload" element={<Upload />} />
          
        </Routes>
      </BrowserRouter>

    </GlobalDataProvider>
    </>
  );
}

export default App;
