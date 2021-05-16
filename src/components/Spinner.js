import "./Spinner.scss";

const Spinner = ({ text }) => {
  return (
    <div className="spinner">
      <div className="spinner__box">
        <div className="spinner__one"></div>
        <div className="spinner__two"></div>
      </div>     
    </div>
  );
};

export default Spinner;