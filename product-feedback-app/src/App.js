import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import FeedbackDetail from "./components/pages/FeedbackDetail";
import NewFeedback from "./components/pages/NewFeedback";
import EditFeedback from "./components/pages/EditFeedback";
import RoadMap from "./components/pages/RoadMap";
import { AllContextProvider } from "./components/context/AllContext.jsx";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:5050/api")
        .then((data) => console.log(data.body))
        .then((data) => console.log(data));
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Router>
        <AllContextProvider>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/feedbackdetail" element={<FeedbackDetail />} />
            <Route path="/newfeedback" element={<NewFeedback />} />
            <Route path="/editfeedback" element={<EditFeedback />} />
            <Route path="/roadmap" element={<RoadMap />} />
          </Routes>
        </AllContextProvider>
      </Router>
    </div>
  );
}

export default App;
