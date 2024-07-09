import {
    Carousel,
    DoMSC,
    ICNAAO,
    NITH,
    Curriculum,
    Container,
} from "../components";
import Speakers from "../components/Speakers";
import Updates from "../components/Updates";
import WhyUs from "../components/WhyUs";

export default function Home() {
    return (
        <div className="bg-base-300">
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

            <Updates />
        </div>
    );
}
