"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
	{
		id: 1,
		title: "Book App",
		description: "An app that stores information of your book collection",
		image: "/projects/BookAppSS.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/ha-zeek/BookApp",
		previewUrl: "https://bookapp-bjot.onrender.com/",
	},
	{
		id: 2,
		title: "Dan's List",
		description: "A simple add to cart app",
		image: "/projects/DansListSS.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/ha-zeek/DansList",
		previewUrl: "https://dans-list.vercel.app/",
	},
	{
		id: 3,
		title: "Space Invader",
		description: "A clone of the Space Invader game",
		image: "/projects/SpaceInvadersSS.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/ha-zeek/ProjectSpaceInvader",
		previewUrl: "https://ha-zeek.github.io/ProjectSpaceInvader/",
	},
	{
		id: 4,
		title: "Movie App",
		description:
			"An app that lets you search of a movie and returns information regarding them",
		image: "/projects/MovieSS.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/ha-zeek/MovieDeets",
		previewUrl: "https://movie-deets.vercel.app/",
	},
	{
		id: 5,
		title: "React Portfolio",
		description: "A personal portfolio built using ReactJs",
		image: "/projects/ReactPortfolioSS.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/ha-zeek/Portfolio_Project",
		previewUrl: "https://portfolio-project-hazel.vercel.app/",
	},
];

const ProjectSection = () => {
	const [tag, setTag] = useState("All");

	const ref = useRef(null);

	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { opacity: 0, y: 0.5 },
		animate: { opacity: 1, y: 1 },
	};

	return (
		<div ref={ref} id="project">
			<h1 className="text-center text-4xl font-serif font-bold text-white mt-4">
				My Projects
			</h1>
			<div className="flex flex-row justify-center items-center gap-2 mt-3 py-6 font-serif">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				/>
			</div>
			<ul
				ref={ref}
				className="grid md:grid-cols-3 gap-8 md:gap-12 content-center font-serif">
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</div>
	);
};

export default ProjectSection;
