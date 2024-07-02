import { FaGoogleScholar } from "react-icons/fa6";
import { FaResearchgate } from "react-icons/fa6";
import CarouselDApiDemo from "./Carousel";
import {
	keyNoteSpeakers,
	plenarySpeakers,
	invitedSpeakers,
} from "./staticSpeakerData";

export default function Speakers() {
	return (
		<div
			id="speakers"
			className={
				" mx-auto items-center flex w-full  flex-col  gap-0 bg-transparent relative overflow-hidden h-full p-4"
			}
		>
			<div className="divider opacity-60 lg:text-3xl md:text-2xl text-xl font-bold uppercase lg:my-10 my-5">
				key note Speakers
			</div>
			<CarouselDApiDemo carouselItems={keyNoteSpeakerCards} />
			<div className="divider opacity-60 lg:text-3xl md:text-2xl text-xl font-bold uppercase lg:my-10 my-5">
				plenary Speakers
			</div>
			<CarouselDApiDemo carouselItems={plenarySpeakerCards} />

			<div className="divider opacity-60 lg:text-3xl md:text-2xl text-xl font-bold uppercase lg:my-10 my-5">
				invited Speakers
			</div>
			<CarouselDApiDemo carouselItems={invitedSpeakerCards} />
		</div>
	);
}

const SpeakerCard = ({ name, subheading, image }) => {
	return (
		<div className="card card-compact bg-base-200 shadow-lg h-80 hover:bg-primary/80 hover:text-primary-content transition-all duration-200  ">
			<figure>
				<img src={image} alt="" />
			</figure>
			<div className="absolute right-1 top-1 flex  flex-row-reverse gap-1">
				<a
					href="/"
					className=" hover:scale-125 btn btn-primary rounded-xl shadow-md bg-opacity-90"
				>
					<FaGoogleScholar size={22} />
				</a>
				<a
					href="/"
					className="hover:scale-125 btn btn-primary rounded-xl shadow-md bg-opacity-90"
				>
					<FaResearchgate size={22} />
				</a>
			</div>

			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				{subheading && <h3 className="card-text">{subheading}</h3>}
			</div>
		</div>
	);
};

const plenarySpeakerCards = plenarySpeakers.map((item) => {
	return (
		<div key={item.name}>
			<SpeakerCard {...item} />
		</div>
	);
});

const invitedSpeakerCards = invitedSpeakers.map((item) => {
	return (
		<div key={item.name}>
			<SpeakerCard {...item} />
		</div>
	);
});

const keyNoteSpeakerCards = keyNoteSpeakers.map((item) => {
	return (
		<div key={item.name}>
			<SpeakerCard {...item} />
		</div>
	);
});
