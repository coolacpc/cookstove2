import React from "react";
import { Element } from "react-scroll";
import iot from "../assets/iot.jpg";
import { Link } from "react-scroll";

function About() {
	return (
		<Element name="Aboutus">
			<section class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-white ">
				<div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
					<div class="flex flex-wrap ">
						<div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
							<div class="relative lg:max-w-md">
								<img
									src={iot}
									alt="aboutimage"
									class="relative z-10 object-cover w-full rounded h-96"
								/>
								{/* <div class="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
									<p class="text-lg font-semibold md:w-72">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											class="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
											viewBox="0 0 16 16"
										>
											<path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
										</svg>{" "}
										Successfully Providing business
										solutions from 25 years
									</p>
								</div> */}
							</div>
						</div>
						<div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
							<div class="pl-4 mb-6 border-l-4 border-blue-500 ">
								{/* <span class="text-sm text-black uppercase dark:text-black">
									Who we are?
								</span> */}
								<h1 class="mt-2 text-3xl font-black text-black md:text-5xl dark:text-black">
									About Us
								</h1>
							</div>
							<p class="mb-6 text-base leading-7 text-black dark:text-black">
								• Namooos is a business entity based in Dubai,
								United Arab Emirates, delivering services for
								B2B customers. The company developed the Stove
								Data Works (SDW) – an integrated hardware and
								software solution providing usage data and
								insights for operational, investments and policy
								decision-making.
							</p>
							<p class="mb-6 text-base leading-7 text-black dark:text-black">
								• Our team combines competencies in business and
								investments, clean cooking and renewable energy,
								data science, IoT and web development together
								to create a holistic experience for our target
								customers.{" "}
							</p>
							<Link
								class="px-4 py-2 text-white bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600"
								to="Contact"
								spy={true}
								smooth={true}
								offset={90}
								duration={500}
							>
								Contact us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Element>
	);
}

export default About;
