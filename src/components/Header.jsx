import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import AddButton from "./AddButton";

// eslint-disable-next-line react/prop-types
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/todos" && (
        <AddButton
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};
// Default props
Header.defaultProps = {
  title: "TODO List",
};
// PropTypes required
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
