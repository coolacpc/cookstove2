import { useState, useRef, useEffect } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Contact() {
	const [agreed, setAgreed] = useState(false);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const form = useRef();
	const progressInterval = useRef(null);
	const progressRef = useRef(null);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_vbpgkwc",
				"template_i00ff22",
				form.current,
				"EG_OE1LYXKvTTUsDM"
			)
			.then(
				(result) => {
					console.log(result.text);
					setShowSuccessAlert(true);
				},
				(error) => {
					<div
						class="mb-4 rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
						role="alert"
					>
						A problem has occured. Please Try again later!
					</div>;
				}
			);
	};

	useEffect(() => {
		if (showSuccessAlert) {
			let progress = 100;

			progressInterval.current = setInterval(() => {
				if (progressRef.current) {
					if (progress > 0) {
						progress -= 1;
						progressRef.current.style.width = `${progress}%`;
					}
				}
			}, 100);

			setTimeout(() => {
				clearInterval(progressInterval.current);
				setShowSuccessAlert(false);
			}, 10000); // Close the alert after 10 seconds
		} else {
			// Reset the progress bar when the alert is not shown
			if (progressRef.current) {
				progressRef.current.style.width = "100%";
			}
		}

		return () => {
			clearInterval(progressInterval.current);
		};
	}, [showSuccessAlert]);

	return (
		<Element name="Contact">
			<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
				<div
					className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
					aria-hidden="true"
				>
					<div
						className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Contact sales
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Be the Pioneer in your neighborhood. Pre-book your
						device now!
					</p>
				</div>
				<form
					ref={form}
					onSubmit={sendEmail}
					className="mx-auto mt-16 max-w-xl sm:mt-20"
				>
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label
								htmlFor="first-name"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								First name
							</label>
							<div className="mt-2.5">
								<input
									required
									type="text"
									name="user_first"
									id="first-name"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="last-name"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Last name
							</label>
							<div className="mt-2.5">
								<input
									required
									type="text"
									name="user_last"
									id="last-name"
									autoComplete="family-name"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="company"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Company
							</label>
							<div className="mt-2.5">
								<input
									required
									type="text"
									name="company"
									id="company"
									autoComplete="organization"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="email"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Email
							</label>
							<div className="mt-2.5">
								<input
									required
									type="email"
									name="user_email"
									id="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="phone-number"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Phone number
							</label>
							<div className="relative mt-2.5">
								<div className="absolute inset-y-0 left-0 flex items-center">
									<label
										htmlFor="country"
										className="sr-only"
									>
										Country
									</label>
									<select
										id="country"
										name="country"
										className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-4 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
									>
										<option>UAE</option>
									</select>
									{/* <ChevronDownIcon
									className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
									aria-hidden="true"
								/> */}
								</div>
								<input
									required
									type="tel"
									name="phone_number"
									id="phone-number"
									autoComplete="tel"
									className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Message
							</label>
							<div className="mt-2.5">
								<textarea
									required
									name="user_message"
									id="message"
									rows={4}
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={""}
								/>
							</div>
						</div>
						<Switch.Group
							as="div"
							className="flex gap-x-4 sm:col-span-2"
						>
							<div className="flex h-6 items-center">
								<Switch
									checked={agreed}
									onChange={setAgreed}
									className={classNames(
										agreed
											? "bg-indigo-600"
											: "bg-gray-200",
										"flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									)}
								>
									<span className="sr-only">
										Agree to policies
									</span>
									<span
										aria-hidden="true"
										className={classNames(
											agreed
												? "translate-x-3.5"
												: "translate-x-0",
											"h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
										)}
									/>
								</Switch>
							</div>
							<Switch.Label className="text-sm leading-6 text-gray-600 required">
								By selecting this, you agree to our{" "}
								<a
									href="#"
									className="font-semibold text-indigo-600"
								>
									privacy&nbsp;policy
								</a>
								.
							</Switch.Label>
						</Switch.Group>
					</div>
					<div className="mt-10">
						<button
							type="submit"
							className={`block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
								agreed ? "" : "opacity-50 cursor-not-allowed"
							}`}
							disabled={!agreed}
							onClick={() => {
								if (!agreed) {
									const message =
										document.getElementById(
											"agreement-message"
										);
									if (message) {
										message.style.visibility = "visible";
									}
								}
							}}
						>
							Let's talk
						</button>
						<p
							id="agreement-message"
							className="mt-2 text-sm text-red-500"
							style={{
								visibility: agreed ? "hidden" : "visible",
							}}
						>
							Please agree to the policies before continuing.
						</p>
					</div>
					<div
						className={`mt-4 ${
							showSuccessAlert ? "block" : "hidden"
						}`}
					>
						<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
							<span className="block sm:inline">
								Your message has been sent successfully.
							</span>
							<div className="w-full h-2 bg-green-200 rounded mt-2 transition-width duration-200">
								<div
									ref={progressRef}
									className="h-full bg-green-500 rounded"
									style={{
										width: "0%",
									}}
								></div>
							</div>
							<span
								className="absolute top-0 bottom-0 right-0 px-4 py-3"
								onClick={() => setShowSuccessAlert(false)}
							>
								{/* <svg
									className="fill-current h-6 w-6 text-green-500"
									role="button"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<title>Close</title>
									<path
										fillRule="evenodd"
										d="M14.348 5.652c.586-.586.586-1.536 0-2.122-.585-.586-1.536-.586-2.121 0L10 7.878 7.774 5.652c-.586-.586-1.536-.586-2.121 0-.586.586-.586 1.536 0 2.122L7.879 10l-2.226 2.226c-.586.586-.586 1.536 0 2.122.293.293.677.439 1.06.439s.767-.146 1.06-.44L10 12.122l2.226 2.226c.293.293.677.44 1.06.44s.767-.146 1.06-.44c.586-.586.586-1.536 0-2.122L12.121 10l2.227-2.226z"
										clipRule="evenodd"
									/>
								</svg> */}
							</span>
						</div>
					</div>
				</form>
			</div>
		</Element>
	);
}
