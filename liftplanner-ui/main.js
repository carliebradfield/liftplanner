import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import LogSession from "./routes/logsession";
import History from "./routes/history";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/logsession" element={<LogSession />} />
      <Route path="/history" element={<History />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);