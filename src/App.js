import './App.css';
import { useState } from 'react';
import MainMenu from './components/menu';
import { Routes, Route } from 'react-router-dom';
import Archive from './pages/Archive';
import Tara from './pages/Tara';
import { FaBars } from 'react-icons/fa';
import Home from './pages/Home';
import Header from './components/header';
import Brutto from './pages/brutto';
import AddedOrders from './pages/addedOrders';
import CurrentOrders from './pages/currentOrders';
import CompletedOrders from './pages/completedOrders';
import TrucksWithRow from './pages/trucksWithRow';
import RowCounter from './pages/rowCounters';
import CompletedRowRecieve from './pages/completedRowRecieve';
import Box from '@mui/material/Box';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <title>Alexprom</title>   
      <div> 
        <Header />
      </div> 
      <div style={{ display: "flex", height: "100vh", width: "100vw" }}>                  
        <MainMenu /*image={image}*/
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}/>
        
        <main>
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
          <Routes>
            <Route path="/" element={<Home />} >           
            </Route>
              <Route path="/home" element={<Home />} >           
            </Route>
            <Route path="/archive" element={<Archive />} />
            <Route path="/tara" element={<Tara />} />
            <Route path="/brutto" element={<Brutto />} />
            <Route path="/addedOrders" element={<AddedOrders />} />
            <Route path="/currentOrders" element={<CurrentOrders />} />
            <Route path="/completedOrders" element={<CompletedOrders />} />
            <Route path="/trucksWithRow" element={<TrucksWithRow />} />
            <Route path="/rowCounters" element={<RowCounter />} />
            <Route path="/completedRowRecieve" element={<CompletedRowRecieve />} />          
          </Routes>  
        </main>        
      </div>
    </Box>    
  );
}

export default App;
