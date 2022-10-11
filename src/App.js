import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.jsx";

function App() {
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");
    return !token ? <Navigate to="/login" /> : children;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/honorarios" />
      </Routes>
    </Router>
  );
}

export default App;
