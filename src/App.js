import {  Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Sidebar from './Components/Sidebar';
import Developers from './Pages/Developers'
import Forum from './Pages/Forum';
import Quiz from './Pages/Quiz'
import Topnav from './Components/Topnav';
import Games from './Pages/Games';

function App() {
  return (
    <>
    <div className="App">
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='topnav'>
        <Topnav/> 
      </div>
      <Routes>
        <Route path='/'exact element={<Home/>}></Route>
        <Route path='/Courses'exact element={<Courses/>}></Route>
        <Route path='/Quiz'exact element={<Quiz/>}></Route>
        <Route path='/Games'exact element={<Games/>}></Route>
        <Route path='/Forum'exact element={<Forum/>}></Route>
        <Route path='/Developers'exact element={<Developers/>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
