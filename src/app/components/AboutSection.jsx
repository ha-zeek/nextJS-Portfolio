"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
	{
		title: "Languages",
		id: "languages",
		content: (
			<ul>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						PHP
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						Javascript
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						Python
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						SQL
					</span>
				</li>
			</ul>
		),
	},
	{
		title: "Technologies",
		id: "technologies",
		content: (
			<ul>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						Node.js
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						React
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						MongoDB
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						ExpressJS
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						Laravel
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						TailwindCSS
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						AlpineJs
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						Livewire
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
						MySQL
					</span>
				</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul>
				<li className="mb-2">
					<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
						Taylors University - Bachelor in Biotechnology (Hons.)
					</span>
				</li>
				<li>
					<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
						General Assembly - Software Engineering Immersive Bootcamp
					</span>
				</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState("languages");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className="text-white" id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/typing2.png"
					width={500}
					height={500}
					className="rounded-xl"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4 font-serif">
						About Me
					</h2>
					<p className=" text-base font-serif lg:text-lg ">
						I'm a software developer with a mix of bootcamp discipline and
						self-taught creativity. Coding is my passion, and I love turning
						complex problems into simple solutions. I'm always exploring and
						learning new things in tech!
					</p>
					<div className="flex flex-row mt-8 font-serif">
						<TabButton
							selectTab={() => handleTabChange("languages")}
							active={tab === "languages"}>
							{" "}
							Languages{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("technologies")}
							active={tab === "technologies"}>
							{" "}
							Technologies{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}>
							{" "}
							Education{" "}
						</TabButton>
					</div>
					<div className="mt-8 font-serif ">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
