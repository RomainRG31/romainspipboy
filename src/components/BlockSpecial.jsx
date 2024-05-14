import PropTypes from "prop-types";
import "./BlockSpecial.css";

const BlockSpecial = ({ img, sentence, id, className }) => {
  return (
    <div className={className}>
      <img className="menu-attribute-image" src={img} key={id} alt="Gif" />
      <p key={id}>{sentence}</p>
    </div>
  );
};

BlockSpecial.propTypes = {
  img: PropTypes.string.isRequired,
  sentence: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BlockSpecial;
