import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/HomePage";
import Error404Page from "./pages/error404Page/Error404Page";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
