import CarouselDApiDemo from "./Carousel";
import {
	KeyNoteSpeakerCards,
	PlenarySpeakerCards,
	InvitedSpeakerCards,
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
				Speakers
			</div>
			<CarouselDApiDemo carouselItems={KeyNoteSpeakerCards} />
			<div className="divider opacity-60 lg:text-3xl md:text-2xl text-xl font-bold uppercase lg:my-10 my-5">
				plenary Speakers
			</div>
			<CarouselDApiDemo carouselItems={PlenarySpeakerCards} />

			<div className="divider opacity-60 lg:text-3xl md:text-2xl text-xl font-bold uppercase lg:my-10 my-5">
				invited Speakers
			</div>
			<CarouselDApiDemo carouselItems={InvitedSpeakerCards} />
		</div>
	);
}
