import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
// import './App.css';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    
        
        <Router>
       
       
      
          <Routes>
            <Route path='/' element= {<Homepage />}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
          </Routes>
        </Router>
      
  );
}

export default App;
