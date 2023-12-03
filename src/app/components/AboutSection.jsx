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
				<li>PHP</li>
				<li>Javascript</li>
				<li>Python</li>
				<li>SQL</li>
			</ul>
		),
	},
	{
		title: "Technologies",
		id: "technologies",
		content: (
			<ul>
				<li>Node.js</li>
				<li>React</li>
				<li>MongoDB</li>
				<li>ExpressJS</li>
				<li>Laravel</li>
				<li>TailwindCSS</li>
				<li>AlpineJS</li>
				<li>Livewire</li>
				<li>MySQL</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul>
				<li>Taylor's University</li>
				<li>General Assembly</li>
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
		<section className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/typing.gif"
					width={500}
					height={500}
					className="rounded-xl"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4 font-serif">
						About Me
					</h2>
					<p className=" text-base font-serif lg:text-lg ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<div className="flex flex-row mt-8">
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
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
