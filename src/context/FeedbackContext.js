import { createContext, useEffect, useState } from "react";
import axios from "axios";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("/feedback?_sort=id&order=desc");
      const data = res.data;
      setFeedback((prev) => {
        if (prev !== data) {
          return data;
        }
        return prev;
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`/feedback/${id}`);
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    const res = await axios.post("/feedback", {
      ...newFeedback,
    });
    setFeedback([res.data, ...feedback]);
  };

  const editFeedback = async (item) => {
    await axios.patch(`/feedback/${item.id}`, { ...item });
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = async (id, updItem) => {
    await axios.put(`/feedback/${id}`, { ...updItem });
    setFeedback(
      feedback.map((item) => (item.id === id ? { item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
