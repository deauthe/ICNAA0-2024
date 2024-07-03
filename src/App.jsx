import {
	Carousel,
	DoMSC,
	Footer,
	ICNAAO,
	NITH,
	Register,
	Curriculum,
	Container,
	Accomodation,
	HowToReach,
} from "./components";
import Navbar from "./components/Navbar/NavBar2";
import Speakers from "./components/Speakers";
import Updates from "./components/Updates";
import WhyUs from "./components/WhyUs";

function App() {
	return (
		<div className="bg-base-300">
			<Navbar />
			<div className="min-h-screen h-fit flex flex-col bg-black ">
				<Carousel />
				<WhyUs />
			</div>
			<Container className={"flex flex-col"}>
				<ICNAAO />
				<DoMSC />
				<NITH />
				<Curriculum />
			</Container>

			<Register />

			<Speakers />
			<Updates />
			<div className="md:grid px-4 gap-4 mx-auto md:grid-cols-2">
				<Accomodation />
				<HowToReach />
			</div>	

			<Footer />
		</div>
	);
}

export default App;
