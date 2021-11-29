import { useParams, useNavigate } from "react-router-dom"; 
import { getTemplate, deleteTemplate } from "../data/templates";

export default function LogTemplate() {
  let navigate = useNavigate();
  let params = useParams();
  let template = getTemplate(parseInt(params.templateName, 10))
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {template.amount}</h2>
      <p>
        {template.name}: {template.number}
      </p>
      <p>Due Date: {template.due}</p>
      <p>
        <button
            onClick={() => {
              deleteTemplate(template.number);
              navigate("/log");
            }}
          >
            Delete
          </button>
      </p>
    </main>
  );
}