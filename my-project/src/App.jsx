import Style from './style';

import {
  Navbar,
  Billing,
  CardDeal,
  Clients,
  Cta,
  Footer,
  Testimonials,
  Hero,
} from './components';

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

      <div className={` bg-primary ${Style.paddingX} ${Style.flexStart}`}>
        <div className={`${Style.boxWidth}`}>
          <Billing /> <CardDeal /> <Testimonials />
          <Clients /> <Cta /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
