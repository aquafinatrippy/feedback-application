const FeedbackStats = ({ feedback }) => {
  let avarage =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  avarage = avarage.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length}</h4>
      <h4>Avarage Rating: {isNaN(avarage) ? 0 : avarage}</h4>
    </div>
  );
};

export default FeedbackStats;