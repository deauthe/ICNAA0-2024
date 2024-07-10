import Speakers from "../components/Speakers";

function SpeakersPage() {
    return (
        <div className="flex flex-col items-center bg-black mt-14 pt-5 w-full">
            <div className="flex flex-col items-center">
                <Speakers />
            </div>
        </div>
    );
}

export default SpeakersPage;
