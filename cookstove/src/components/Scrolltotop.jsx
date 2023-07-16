import React, { useState, useEffect } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

const Scrolltotop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<button
			className={`${
				isVisible ? "fixed bottom-5 right-5" : "hidden"
			} bg-blue-500 text-white p-2 rounded-full focus:outline-none z-50`}
			onClick={scrollToTop}
		>
			<ArrowUpCircleIcon className="h-6 w-6" />
		</button>
	);
};

export default Scrolltotop;
