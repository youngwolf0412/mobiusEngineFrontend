import "./App.css";
import Header from "./components/Header/Header";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import Testimonials from "./components/Testimonials/Testimonials";
import PricingCard from "./components/PricingCard/PricingCard";
import AdvancePricingCard from "./components/AdvancePricingCard/AdvancePricingCard";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <WorkProcess />
        <div className="pricing-section">
          <PricingCard />
        </div>
        <div className="advance-pricing-section">
          <AdvancePricingCard />
        </div>
        <Testimonials />
      </div>
    </>
  );
}

export default App;
