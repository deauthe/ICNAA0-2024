import {
  Contact,
  Carousel,
  DoMSC,
  Events,
  Footer,
  ICNAAO,
  NITH,
  Register,
} from "./components";
import Curriculum from "./components/Curriculum";
import Navbar from "./components/Navbar/NavBar2";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="h-screen flex flex-col">
        <Carousel />
        <WhyUs />
      </div>
      <main>
        <ICNAAO />
        <DoMSC />
        <NITH />
        <Curriculum />
        <Events />
      </main>
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
