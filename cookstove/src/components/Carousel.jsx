import { Carousel } from "@material-tailwind/react";
import Box1 from "../assets/Box1.jpg";
import Box2 from "../assets/Box2.jpg";
import Box3 from "../assets/Box3.jpg";

export default function Carouselimg() {
	return (
		<Carousel
			className="rounded-xl"
			navigation={({ setActiveIndex, activeIndex, length }) => (
				<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
					{new Array(length).fill("").map((_, i) => (
						<span
							key={i}
							className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
								activeIndex === i
									? "bg-white w-8"
									: "bg-white/50 w-4"
							}`}
							onClick={() => setActiveIndex(i)}
						/>
					))}
				</div>
			)}
		>
			<img
				src={Box1}
				alt="image 1"
				className="h-full w-full object-cover"
			/>
			<img
				src={Box2}
				alt="image 2"
				className="h-full w-full object-cover"
			/>
			<img
				src={Box3}
				alt="image 3"
				className="h-full w-full object-cover"
			/>
		</Carousel>
	);
}
