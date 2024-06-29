import banner2 from "../../assets/banner2.jpg";
import banner1 from "../../assets/banner1.jpg";

export default function Carousel() {
	return (
		<section id="carousel" className="w-screen h-2/3 min-h-96">
			<div className="carousel w-full py-0 my-0 h-full">
				<div id="slide1" className="carousel-item relative w-full">
					<img src={banner1} className="w-full" />
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img src={banner2} className="w-full" />
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
