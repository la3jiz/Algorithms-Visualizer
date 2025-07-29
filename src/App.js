import "./App.css";
import { NavbarDemo } from "./components/navbar";
import NotFound from "./pages/NotFound";
import PathFindingVisualizer from "./pages/PathFindingVisualizer/PathFindingVisualizer";
import { Routes, Route } from "react-router-dom";
import QuickSort from "./pages/QuickSort";
import MedianOfTwoArrays from "./pages/MedianOfTwoArrays";

function App() {
  return (
    <div className="App">
      <NavbarDemo />
      <Routes>
        <Route path="/" element={<></>}  />
        <Route path="/dijkastra" element={<PathFindingVisualizer />} />
        <Route path="/quick-sort" element={<QuickSort />} />
        <Route path="/median" element={<MedianOfTwoArrays />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
