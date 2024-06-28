import {
	Contact,
	Container,
	Carousel,
	DoMSC,
	Footer,
	ICNAAO,
	NITH,
	Navbar,
	Register,
} from "./components";
import WhyUs from "./components/WhyUs";

function App() {
	return (
		<div className="text-base">
			<Navbar />
			<div className="h-fit flex flex-col gap-3">
				<Carousel />
				<Container>
					<WhyUs />
				</Container>
			</div>
			<main>
				<ICNAAO />
				<DoMSC />
				<NITH />
			</main>
			<Register />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
