import Style from './style';

import { Navbar, Billing, CardDeal, Footer, Hero } from './components';

const App = () => {
  return (
    <div className="  w-full overflow-hidden">
      <div className={` bg-primaryColor ${Style.paddingX} ${Style.flexCenter}`}>
        <div className={`${Style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`  ${Style.flexStart}`}>
        <div className={`${Style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* <div className={` bg-primary ${Style.paddingX} ${Style.flexStart}`}>
        <div className={`${Style.boxWidth}`}>
          <Billing /> <CardDeal />
          <Footer />
        </div>
      </div> */}

      <div className={`  ${Style.paddingX} ${Style.flexStart}`}>
        <div className={`${Style.boxWidth}`}>
          <Billing /> <CardDeal />
        </div>
      </div>
      <div className={` bg-primaryColor ${Style.paddingX} ${Style.flexCenter}`}>
        <div className={`${Style.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
