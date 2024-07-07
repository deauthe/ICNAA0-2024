import CarouselDApiDemo from "./Carousel";
import {
    KeyNoteSpeakerCards,
    CommitteeSpeakerCards,
} from "./staticSpeakerData";

export default function Speakers() {
    return (
        <div
            id="speakers"
            className={
                " mx-auto items-center flex w-full  flex-col  gap-0 bg-transparent relative overflow-hidden h-full p-4 max-w-7xl"
            }
        >
            <div className="divider opacity-60 lg:text-3xl md:text-2xl text-xl font-bold uppercase lg:my-10 my-5">
                Speakers
            </div>
            <CarouselDApiDemo carouselItems={KeyNoteSpeakerCards} />
            <div className="divider opacity-60 lg:text-3xl md:text-2xl text-xl font-bold uppercase lg:my-10 my-5">
                Comittee
            </div>
            <CarouselDApiDemo carouselItems={CommitteeSpeakerCards} />
        </div>
    );
}
