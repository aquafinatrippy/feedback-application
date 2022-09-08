import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div>
      <Header text="Feedback Application" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
};
export default App;
