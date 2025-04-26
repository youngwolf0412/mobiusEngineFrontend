import "./App.css";
import Header from "./components/Header/Header";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import Testimonials from "./components/Testimonials/Testimonials";
import PricingCard from "./components/PricingCard/PricingCard";
import AdvancePricingCard from "./components/AdvancePricingCard/AdvancePricingCard";
import ResumeBuilding from "./components/ResumeBuilding/ResumeBuilding";
import ContactCTA from "./components/ContactCTA/ContactCTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-container">
        <WorkProcess />
        <h2>Job Application Service Plans</h2>
        <div className="pricing-cards-container">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
        <AdvancePricingCard />
        <Testimonials />
        <ResumeBuilding />
        <ContactCTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;
