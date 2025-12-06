// App.jsx
import './App.css';
import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
import DigitalMarketing from './Pages/Digital_marketing';
import Global from './Pages/Global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarehouseService from './Pages/WareHouse';
import OnboardingServicePage from './Pages/Onboarding_service';
import PartnersPage from './Pages/partners';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Contact from './Pages/Contact';
import About from './Pages/About';
import WebsiteDevelopment from './Pages/WebsiteDevelopment';
import SeoSmo from './Pages/SeoSmo';
import AccountManagement from './Pages/AccountManagement';
import EcommercePhotoshoots from './Pages/EcommercePhotoshoots';
import PrivacyPolicyPage from './Pages/PrivacyPolicy';
import TermsAndConditionsPage from './Pages/TermsAndCondition';
import RefundCancellationPolicy from './Pages/Cancellation';
import ScrollToTop from './Components/ScrollToTop';
import NextSaaSHeader from './Components/Navtest';
import WalmartOnboardingPage from './Pages/Walmart';
import VoilaStudioPage from './Pages/Studio';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {/* Now Navbar has Router context */}
      <NextSaaSHeader/>

      <Routes>
        <Route path="/" element={<Global />} />

        {/* services */}
        <Route path="/web-and-app-development" element={<WebsiteDevelopment />} />
        <Route path="/seo-smo" element={<DigitalMarketing />} />
        <Route path="/warehousing-fulfillment" element={<WarehouseService />} />
        <Route path="/onboarding-consultancy" element={<OnboardingServicePage />} />
        <Route path="/social-media-marketing" element={<SeoSmo />} />
        <Route path="/account-management" element={<AccountManagement />} />
        <Route path="/ecommerce-photoshoots" element={<EcommercePhotoshoots />} />
        <Route path="/walmart-onboarding" element={<WalmartOnboardingPage />} />
        <Route path="/ecommerce-studio" element={<VoilaStudioPage />} />

        {/* pages */}
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-condition" element={<TermsAndConditionsPage />} />
        <Route path="/refund-policy" element={<RefundCancellationPolicy />} />


      </Routes>

      {/* Footer also has Router context now */}
      <Footer />
    </Router>
  );
}

export default App;
