import "./App.css";
import { NavbarDemo } from "./components/navbar";
import NotFound from "./pages/NotFound";
import PathFindingVisualizer from "./pages/PathFindingVisualizer/PathFindingVisualizer";
import { Routes, Route } from "react-router-dom";
import QuickSort from "./pages/QuickSort";
import MedianOfTwoArrays from "./pages/MedianOfTwoArrays";
import Home from "./pages/Home";
import AddTwoNumbers from "./pages/AddTwoNumbers";
import LongestSubstring from "./pages/LongestSubstring";

function App() {
  return (
    <div className="App">
      <NavbarDemo />
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{ width: "100%", height: "100vh", position: "relative" }}
            >
              <Home
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
          }
        />
        <Route path="/dijkastra" element={<PathFindingVisualizer />} />
        <Route path="/quick-sort" element={<QuickSort />} />
        <Route path="/median" element={<MedianOfTwoArrays />} />
        <Route path="/add-two-numbers" element={<AddTwoNumbers />} />
        <Route path="/longest-substring" element={<LongestSubstring />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
