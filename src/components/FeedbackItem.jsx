import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

const FeedbackItem = ({ item, handleDelete }) => {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
