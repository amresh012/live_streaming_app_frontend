import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import DownloadSection from './sections/DownloadSection';
import FooterSection from './sections/FooterSection';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoutes';
import SettingsSection from './pages/setting';
import MessagesSection from './pages/Message';
import CommunitySection from './pages/Community';
import LiveStream from './pages/LiveStreaml';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SubscriptionPage from './pages/Subscription';
import MonetizationPage from './pages/Monetization';

// Add global animations
const globalStyles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
`;

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <DownloadSection />
      </main>
      <FooterSection />
    </>
  );
}

function App() {
  useEffect(() => {
    // Update title
    document.title = 'StreamWave - Live Streaming Platform';
    
    // Inject global animations
    const style = document.createElement('style');
    style.textContent = globalStyles;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);


  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 overflow-clip text-gray-900 dark:text-white transition-colors duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
              />
              <Route path='/dashboard/settings' element={<ProtectedRoute><SettingsSection/></ProtectedRoute>}/>
              <Route path='/dashboard/messages' element={<ProtectedRoute><MessagesSection/></ProtectedRoute>}/>
              <Route path='/dashboard/community' element={<ProtectedRoute><CommunitySection/></ProtectedRoute>}/>
              <Route path='/dashboard/stream/:id' element={<ProtectedRoute><LiveStream /></ProtectedRoute>}/>
              <Route path="/dashboard/subscription" element={<ProtectedRoute><SubscriptionPage /></ProtectedRoute>} />
              <Route path="/forgot-password" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />
              <Route path="/reset-password" element={<ProtectedRoute><ResetPassword /></ProtectedRoute>} />
              <Route path='/dashboard/monetize' element={<ProtectedRoute><MonetizationPage /></ProtectedRoute>}/>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;