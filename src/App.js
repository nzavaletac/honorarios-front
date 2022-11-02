import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.jsx";
import { HonorariosPage } from "./pages/HonorariosPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");
    return !token ? <Navigate to="/" /> : children;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <HonorariosPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
