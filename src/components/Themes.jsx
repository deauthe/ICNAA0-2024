import Data from "../data.json";

export default function Curriculum() {
    return (
        <section className="max-w-8xl w-full mx-auto text-left my-3 ">
            <div className="card w-full bg-base-200 shadow-lg hover:bg-base-100 hover:cursor-pointer transition-all duration-150 hover:scale-[101%]">
                <div className="card-body ">
                    <h3 className="font-extrabold card-title">Topics</h3>
                    <ul className="list-disc list-outside grid lg:grid-rows-5 md:grid-flow-col md:grid-rows-10 gap-2">
                        {Data.themes.map((theme, index) => (
                            <li className="text-base font-semibold" key={index}>
                                {theme}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
