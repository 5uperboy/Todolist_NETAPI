import PropTypes from "prop-types";
import "../pages/css/todoPage.css";

// eslint-disable-next-line react/prop-types
const AddButton = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

AddButton.defaultProps = {
  color: "steelblue",
};

AddButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default AddButton;
