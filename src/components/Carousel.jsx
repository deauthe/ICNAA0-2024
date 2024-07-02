"use client";
import * as React from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../components/ui/carousel";

export default function CarouselDApiDemo({ carouselItems }) {
	const [api, setApi] = React.useState();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}
		console.log(current, count);

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="w-5/6 max-w-screen ">
			<Carousel setApi={setApi} className="w-full h-fit mb-5">
				<CarouselContent className="">
					{carouselItems.map((item, index) => {
						return (
							<CarouselItem className="max-w-sm " key={index}>
								{item}
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
