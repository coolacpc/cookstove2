import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
	"24/7 Support",
	"How To Use Training",
	"1-Time Installation",
	"Effortless Temperature Control",
];

export default function HomePricing() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl sm:text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Own SDW-AlphaOne
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						buckle up and prepare yourself for the ride of a
						lifetime. Get ready to experience stove and grill
						management like never before!
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
					<div className="p-8 sm:p-10 lg:flex-auto text-center">
						<h3 className="text-3xl font-bold tracking-tight text-gray-900 mt-8">
							SDW-AlphaOne
						</h3>
						<p className="mt-8 text-base leading-7 text-gray-600">
							Introducing the revolutionary device that will
							change your life forever! It's time to experience a
							whole new level of excitement as you navigate the
							intricate art of stove management. Who needs boring,
							mundane tasks when you can monitor your cooking
							appliances?
						</p>
					</div>

					{/* In case of whats included required, Contact me */}
					<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
						<div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
							<div className="mx-auto max-w-xs px-8">
								<p className="text-base font-semibold text-gray-600">
									Pay once, own it forever
								</p>
								<a
									href="#"
									className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Pre-Book
								</a>
								<p className="mt-6 text-xs leading-5 text-gray-600">
									We'll email you your order confirmation.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
