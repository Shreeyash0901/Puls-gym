import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Programs from "./components/sections/Programs";
import ThePulse from "./components/sections/ThePulse";
import Coaches from "./components/sections/Coaches";
import Membership from "./components/sections/Membership";
import Join from "./components/sections/Join";
import ScrollProgress from "./components/common/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <ThePulse />
      <Coaches />
      <Membership />
      <Join />
      <Footer />
    </>
  );
}

export default App;