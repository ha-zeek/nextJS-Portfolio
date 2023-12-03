"use client";

import React from "react";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-serif">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-600">
							Hi, I'm{" "}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								"Haziq",
								1000,
								"Web Developer",
								1000,
								"Full Stack Developer",
								1000,
								"Technology Enthusiast",
								1000,
							]}
							wrapper="span"
							speed={40}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-gray-300 text-lg sm:text-lg lg:text-xl font-serif">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<div className="mt-3">
						<button className="px-6 py-3 rounded-full sm:w-fit mr-4 bg-white hover:bg-gray-600 hover:text-white text-black font-serif">
							Contact Me
						</button>
						<button className="px-6 py-3 rounded-full sm:w-fit mt-3 bg-white hover:bg-gray-600 hover:text-white text-black font-serif">
							Download Resume
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
