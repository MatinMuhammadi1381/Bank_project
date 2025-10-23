import styles from "./style";


import Navbar from "./components/Navbar.jsx";
import Billing from "./components/Biling.jsx";
import CardDeal from "./components/CardDeal.jsx";
import Business from "./components/Business.jsx";
import Clients from "./components/Clients.jsx";
import CTA from "./components/CTA.jsx";
import Stats from "./components/Stats.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Hero from "./components/Hero.jsx";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;