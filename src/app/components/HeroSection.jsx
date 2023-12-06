"use client";

import React from "react";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-serif">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-600">
							Hi, I am{" "}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								"Hazeek",
								1000,
								"or Haziq",
								1000,
								"a Web Developer",
								1000,
								"a FullStack Developer",
								1000,
							]}
							wrapper="span"
							speed={30}
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
							Resume
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
