import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Beach from './components/pages/Beach/Beach';
import Eateries from './components/pages/Eateries/Eateries';
import Educational from './components/pages/Educational/Educational';
import Nature from './components/pages/Nature/Nature';
import Urban from './components/pages/Urban/Urban';
import Home from './components/pages/Home/Home';
import Navbar from './components/Navbar';

//Need to figure out what components/tourist attractions I can create/promote

/*
So maybe:

Educational: Cascade Kingdom
City Life: Metro Kingdom
Beach Life: Seaside Kingdom
Nature: Wooded Kingdom, Lake Kingdom
Eateries: Luncheon Kingdom
*/
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="app-Navbar"/>
        <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/beach' element={<Beach/>}></Route>
            <Route path='/eateries' element={<Eateries/>}></Route>
            <Route path='/educational' element={<Educational/>}></Route>
            <Route path='/nature' element={<Nature/>}></Route>
            <Route path='/urban' element={<Urban/>}></Route>
          </Routes>
        </Router>
    </div>
    
    
  );
}

export default App;
