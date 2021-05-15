import './Badge.scss';

const Badge = ({ text, hasIcon }) => {
  return (
    <div className="badge">
      {hasIcon && <img src="img/icons8-ok.png" className="badge__img" alt="checkmark icon" />}
      <p>{text}</p>   
    </div>
  );
};

export default Badge;
