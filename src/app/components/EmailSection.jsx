"use client";
import React, { useState } from "react";
import Link from "next/link";

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};
		const JSONdata = JSON.stringify(data);
		const endpoint = "/api/send";

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: "POST",
			// Tell the server we're sending JSON.
			headers: {
				"Content-Type": "application/json",
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);
		const resData = await response.json();

		if (response.status === 200) {
			console.log("Message sent.");
			setEmailSubmitted(true);
		}
	};

	return (
		<section
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6 "
			id="contact">
			<div>
				<h5 className="text-xl font-bold text-white my-2 font-serif">
					{" "}
					Lets Connect!
				</h5>
				<p className="text-gray-200 mb-4 max-w-md font-serif">
					I'm on the lookout for new opportunities and my inbox is always
					welcoming. Feel free to reach out, whether it is a query or a simple
					hello. I will do my best to respond promptly!
				</p>
				<div className="socials flex flex-row gap-4">
					<Link href="https://github.com/ha-zeek">
						<svg
							className="w-[20px] h-[20px] text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
								clip-rule="evenodd"
							/>
						</svg>
					</Link>
					<Link href="https://www.linkedin.com/in/haziq-luqman/">
						<svg
							className="w-[20px] h-[20px] text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 15 15">
							<path
								fill-rule="evenodd"
								d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
								clip-rule="evenodd"
							/>
							<path d="M3 5.012H0V15h3V5.012Z" />
						</svg>
					</Link>
				</div>
			</div>
			<div>
				<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
					<div>
						<label
							htmlFor="email"
							className="block text-sm mb-2 font-medium text-white">
							Email Address
						</label>
						<input
							name="email"
							type="email"
							id="email"
							required
							placeholder="elonmusk@tesla.com"
							className="bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						/>
					</div>
					<div>
						<label
							htmlFor="subject"
							className="block text-sm mb-2 font-medium text-white">
							Subject
						</label>
						<input
							name="subject"
							type="text"
							id="subject"
							required
							placeholder="Just saying Hi!"
							className="bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						/>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm mb-2 font-medium text-white">
							Message
						</label>
						<textarea
							name="message"
							id="message"
							placeholder="Let's talk about..."
							className="bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></textarea>
					</div>
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
						Send Message
					</button>
					{emailSubmitted && (
						<p className="text-green-500 text-sm mt-2">
							Email sent successfully!
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
