import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import About from "./components/views/About";
import AboutActionLink from "./components/AboutActionLink";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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
