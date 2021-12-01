import { useParams, useNavigate } from "react-router-dom"; 
import { getTemplate, deleteTemplate } from "../data/templates";
import { Form, Button } from "react-bootstrap";

export default function LogTemplate() {
  
  let navigate = useNavigate();
  let params = useParams();
  let template = getTemplate(parseInt(params.id, 10));
  
  return (      
    <div className="template-form-wrapper">
      <Form className="template-form">
        <h2>{template.name}</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Activity:</Form.Label>
          <Form.Control type="text" defaultValue={template.activity} />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Time Elapsed (minutes):</Form.Label>
          <Form.Control type="string" defaultValue={template.timeElapsedMinutes} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => {
              //doSomething(template.id);
              navigate("/log");
            }}>
          Submit
        </Button>
      </Form>     
    </div> 
  );
}