import Logo from "../assets/Logo.jpg";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

// const navigation = [
// 	{ name: "Home", href: "/cookstove2" },
// 	{ name: "Clients", href: "/cookstove2/clients" },
// ];

export default function Hero() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="bg-white">
			<header className="absolute inset-x-0 top-0 z-50">
				<nav className="flex items-center justify-between p-6 lg:px-8 mx-auto max-w-5xl">
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">CookStove</span>
							<img className="h-8 w-auto" src={Logo} alt="" />
						</a>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{/* {navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								{item.name}
							</a>
						))} */}
						<Link
							className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
							to="Devicedetails"
							spy={true}
							smooth={true}
							offset={10}
							duration={500}
						>
							Features
						</Link>
						<Link
							className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
							to="Aboutus"
							spy={true}
							smooth={true}
							offset={10}
							duration={500}
						>
							About us
						</Link>{" "}
						<Link
							className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
							to="Pricing"
							spy={true}
							smooth={true}
							offset={10}
							duration={500}
						>
							Products
						</Link>
						<Link
							className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
							to="Contact"
							spy={true}
							smooth={true}
							offset={90}
							duration={500}
						>
							Contact us
						</Link>
					</div>
				</nav>

				<Dialog
					as="div"
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-50" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">
									Stove Data Works
								</span>
								<img className="h-8 w-auto" src={Logo} alt="" />
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{/* {navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))} */}
									<div className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">
										<div className="mb-6">
											<Link
												className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
												to="Devicedetails"
												spy={true}
												smooth={true}
												offset={10}
												duration={500}
											>
												Features
											</Link>
										</div>
										<div className="mb-6">
											<Link
												className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
												to="Aboutus"
												spy={true}
												smooth={true}
												offset={10}
												duration={500}
											>
												About us
											</Link>
										</div>
										<div className="mb-6">
											<Link
												className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
												to="Pricing"
												spy={true}
												smooth={true}
												offset={10}
												duration={500}
											>
												Products
											</Link>
										</div>
										<div>
											<Link
												className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
												to="Contact"
												spy={true}
												smooth={true}
												offset={80}
												duration={500}
											>
												Contact us
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>

			<div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				<div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
							Stove usage data and insights.
						</h1>
						<p className="mt-3 text-lg leading-8 text-gray-600">
							Catalysing Investment in Clean-Cooking
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Stove Data Works (SDW) is a cutting-edge Internet of
							Things (IoT)-based solution designed to
							revolutionize stove monitoring. Our comprehensive
							solution consists of a state-of-the-art hardware
							component integrated with a user-friendly web-based
							platform. By collecting and visualizing precise data
							on stove usage and cooking patterns, SDW empowers
							businesses to make informed decisions, optimize
							investments, and shape policy direction with
							unparalleled precision.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="Pricing"
								spy={true}
								smooth={true}
								offset={10}
								duration={500}
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Pre-Book
							</Link>
							<Link
								className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
								to="Devicedetails"
								spy={true}
								smooth={true}
								offset={90}
								duration={500}
							>
								Learn how it works{" "}
								<span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
