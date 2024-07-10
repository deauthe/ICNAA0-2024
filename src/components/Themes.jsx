import Data from "../data.json";

export default function Curriculum() {
    return (
        <section className="grid md:grid-cols-2 lg:gap-5 md:gap-3 gap-2 mx-auto text-justify my-3 ">
            <div className="card bg-base-200 shadow-lg hover:bg-base-100 hover:cursor-pointer transition-all duration-150 hover:scale-105">
                <div className="card-body ">
                    <h3 className="font-extrabold card-title">Topics</h3>
                  <ul className="list-decimal list-inside">
                    {Data.themes.map((theme, index) => (
                        <li key={index}>{theme}</li>
                    ))}
                    </ul> 
                </div>
            </div>
            <div className="card bg-base-200 shadow-lg hover:bg-base-100 hover:cursor-pointer transition-all duration-150 hover:scale-105">
                <div className="card-body">
                    <h3 className="font-extrabold card-title">Courses</h3>
                    <ul className="list-disc list-inside">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
