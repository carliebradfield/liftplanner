import { Outlet, Link } from "react-router-dom";
import logo from './weightlifter.svg';
import Nav from 'react-bootstrap/Nav';
import './App.css';

export default function App() {
  return (
    
      <div className="App">
       
        <header className="App-header">
        
          LIFT PLANNER
                
          <img src={logo} className="logo-wrapper" alt="Logo of a woman weightlifting"/>
        
          <Nav variant="tabs" className="tab-text">
            {/* todo: Nav defaultactivekey? */}
            <Nav.Item>
              <Nav.Link eventKey="1" as={Link} to="/log">LOG SESSION</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" as={Link} to="/history">HISTORY</Nav.Link>
            </Nav.Item>
          </Nav>
        
        </header>

        <Outlet />
    </div>

   


  );
  
}
