import './MarchExpo.scss';

const MarchExpo = () => {
  return (
    <div className="march-expo">
      <img 
        src="img/Logo.png"
        alt="march expo logo"
        className="march-expo__logo" 
      />
      <div className="march-expo__free-shipping">•  Free shipping (up to $40)</div>
      <div className="march-expo__on-time">•  On-time delivery guaranteed</div>
      <img
        className="march-expo__forward"
        src="img/icons8-forward.png"
        alt="forward icon" 
      />      
    </div>
  );
};

export default MarchExpo;
