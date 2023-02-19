import React from 'react'
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Search from './Pages/Search';
import ItalianPage from './Pages/ItalianPage';
import SeaFood from './Pages/SeaFood';




function App() {
  return (
    <Router>            
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/search" element={<Search />} />   
          <Route exact path="/seafood" element={<SeaFood />} />   
          <Route exact path="/italian" element={<ItalianPage />} />     

          {/* <Route path="/search" element={<MenuPage />} />
          <Route path ="recepie" element={<Recepie />} />         */}
      </Routes>      
    </Router>
  );
}

export default App;
