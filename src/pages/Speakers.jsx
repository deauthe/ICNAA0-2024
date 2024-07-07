import Speakers from "../components/Speakers";

function SpeakersPage() {
    return (
        <div className="flex flex-col items-center bg-base-300">
            <div className="text-4xl md:text-5xl lg:text-6xl uppercase text-black bg-black">
                Speakers
            </div>
            <div className="flex flex-col items-center">
                <Speakers />
            </div>
        </div>
    );
}

export default SpeakersPage;
