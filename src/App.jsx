import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Destaque from './components/Destaque';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header onAdminLoginChange={() => {}} />
      
      <HeroSection />
      
      <Destaque />
      
      <Footer />
    </div>
  );
}

export default App;