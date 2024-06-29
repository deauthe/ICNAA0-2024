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
import Curriculum from "./components/Curriculum";
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
			<Container className={"flex flex-col"}>
				<ICNAAO />
				<DoMSC />
				<Curriculum />
				<NITH />
			</Container>
			<Register />

			<Footer />
		</div>
	);

}

export default App;
