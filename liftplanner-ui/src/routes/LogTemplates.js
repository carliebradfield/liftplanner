import {
  NavLink,
  Outlet
} from "react-router-dom";
import { getTemplates } from "../data/templates";
import Button from "react-bootstrap/Button";

export default function LogTemplates() {
    let templates = getTemplates();

    return (
      <div className="template-options-wrapper">       
          {templates
            .map(t => (           
                <Button variant="secondary">
                  <NavLink
                    // style={({ isActive }) => ({
                    //   display: "block",
                    //   margin: "1rem 0",
                    //   color: isActive ? "red" : ""
                    // })}
                    to={`/log/${t.id}`}
                    key={t.id}                
                  >
                    {t.name}
                  </NavLink> 
                </Button>            
            ))}                
          <Outlet />
      </div>
      
    );
}
