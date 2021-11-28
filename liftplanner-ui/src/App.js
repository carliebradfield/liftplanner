import { Link } from "react-router-dom";
import  logo from './weightlifter.svg';
import Nav from 'react-bootstrap/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        LIFT PLANNER
               
        <img src={logo} className="logo-wrapper" alt="Logo of a woman weightlifting"/>
       
        <Nav variant="tabs" className="tab-text">
          {/* todo: Nav defaultactivekey? */}
          <Nav.Item>
            <Nav.Link eventKey="1"><Link to="/logsession">LOG SESSION</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2"><Link to="/history">HISTORY</Link></Nav.Link>
          </Nav.Item>
        </Nav>
      
      </header>
      <div style={{height: "600px"}}>

        Test div
      </div>

  </div>
  );
  
}

export default App;
