import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Earth from "./views/Earth";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<null />}>
        <Routes>
          <Route path="/" element={<Earth />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
