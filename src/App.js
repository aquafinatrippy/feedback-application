import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";
import About from "./components/views/About";
import AboutActionLink from "./components/AboutActionLink";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback Application" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList handleDelete={deleteFeedback} />
                  <AboutActionLink />
                </>
              }
            />
            <Route element={<About />} path="/about" />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
};
export default App;
