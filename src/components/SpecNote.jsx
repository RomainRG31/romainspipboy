import "./SpecNote.css";
import PropTypes from "prop-types";

const SpecNote = ({ spec, note }) => {
  return (
    <div className="display-flex-special">
      <p>{spec}</p>
      <p>{note}</p>
    </div>
  );
};

SpecNote.propTypes = {
  spec: PropTypes.string.isRequired,
  note: PropTypes.number.isRequired,
};

export default SpecNote;
