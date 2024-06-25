import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Earth from "./views/Earth";
import OverlayLoader from "./components/Spinner/OverlayLoader";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<OverlayLoader />}>
        <Routes>
          <Route path="/" element={<Earth />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
