// App.jsx
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

import PrivacyPolicyPage from './Pages/PrivacyPolicy';
import TermsAndConditionsPage from './Pages/TermsAndCondition';
import RefundCancellationPolicy from './Pages/Cancellation';
import ScrollToTop from './Components/ScrollToTop';

import LotusImall from './Pages/LotusiMall';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <Router basename="/lotusimall">
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<LotusImall />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-and-condition" element={<TermsAndConditionsPage />} />
                <Route path="/refund-policy" element={<RefundCancellationPolicy />} />
            </Routes>
        </Router>

    );
}

export default App;
