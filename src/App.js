import './App.css';
import Header from './Header'
import Feed from './Feed'
import SideBar from './SideBar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="app">     
      <Header/>
      <div className="app__body">
        <Router>
          <Feed/>
          <SideBar/>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
