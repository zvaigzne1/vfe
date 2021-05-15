import BadgeList from './BadgeList';
import './InfoBox.scss';
import OptionList from "./OptionList"


const InfoBox = () => {
  return (
    <>
      <section className="info-box">
        <div className="info-box__container">
          <div className="badges">
            <BadgeList />          
          </div>

          {/* <OptionList /> */}

        </div>      
      </section>
    </>
  );
};

export default InfoBox;
