import { Carousel, DoMSC, Footer, ICNAAO, NITH, Register } from "./components";
import Navbar from "./components/Navbar/NavBar2";
import WhyUs from "./components/WhyUs";

function App() {
	return (
		<div className="">
			<Navbar />
			<div className="h-screen flex flex-col bg-black">
				<Carousel />
				<WhyUs />
			</div>
			<main>
				<ICNAAO />
				<DoMSC />
				<NITH />
			</main>
			<Register />

			<Footer />
		</div>
	);
}

export default App;
