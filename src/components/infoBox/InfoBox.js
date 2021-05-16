import './InfoBox.scss';
import BadgeList from './BadgeList';
import Title from './Title';
import OptionList from "./OptionList"
import RatingsBox from './RatingsBox';
import PriceBox from './PriceBox';
import MarchExpo from './MarchExpo';
import CountdownBox from './CountdownBox';
import TradeAssurance from './TradeAssurance';
import Payments from './Payments';
import Links from './Links';


const InfoBox = () => {
  return (
    <>
      <section className="info-box">
        <div className="info-box__container">
            <BadgeList />
            <Title />
            <RatingsBox />
            <PriceBox />
            <MarchExpo />
            <CountdownBox />
            <OptionList />
            <TradeAssurance />
            <Payments />
            <Links />

        </div>      
      </section>
    </>
  );
};

export default InfoBox;
