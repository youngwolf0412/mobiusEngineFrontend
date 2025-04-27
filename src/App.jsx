import "./App.css";
import Header from "./components/Header/Header";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import Testimonials from "./components/Testimonials/Testimonials";
import PricingCard from "./components/PricingCard/PricingCard";
import AdvancePricingCard from "./components/AdvancePricingCard/AdvancePricingCard";
import ResumeBuilding from "./components/ResumeBuilding/ResumeBuilding";
import ContactCTA from "./components/ContactCTA/ContactCTA";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-container">
        <WorkProcess />
      </div>
      <AboutUs />
      <div className="app-container">
        <Testimonials />
        <WhyChooseUs />

        <h2 style={{ marginTop: "90px" }}>Job Application Service Plans</h2>
        <div className="pricing-cards-container">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
        <AdvancePricingCard />
        <ResumeBuilding />
        <ContactCTA />
      </div>
      <div
        className="logo-bottom"
        style={{ marginLeft: "180px", marginTop: "180px" }}
      >
        <img src="./logo-bottom.png" alt="logo" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
