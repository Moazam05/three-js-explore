import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Earth from "./views/Earth";
import Cube from "./views/Cube";
// Components
import OverlayLoader from "./components/Spinner/OverlayLoader";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<OverlayLoader />}>
        <Routes>
          <Route path="/" element={<Earth />} />
          <Route path="/cube" element={<Cube />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
