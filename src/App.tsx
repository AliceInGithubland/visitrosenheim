import styles from "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./stories/pages/Landingpage/Landingpage";
import CafeMap from "./stories/pages/CafeMap/CafeMap";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/CafeMap" element={<CafeMap />}></Route>
      </Routes>
    </div>
  );
}

export default App;
