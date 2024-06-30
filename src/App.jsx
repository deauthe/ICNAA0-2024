import {
	Carousel,
	DoMSC,
	Footer,
	ICNAAO,
	NITH,
	Register,
	Curriculum,
	Container,
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
				<Curriculum />
				<NITH />
			</Container>

			<Register />

			<Speakers />
			<Updates />

			<Footer />
		</div>
	);
}

export default App;
