"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
	{
		id: 1,
		title: "Book App",
		description: "Book App description",
		image: "/projects/BookAppSS.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 2,
		title: "Dan's List",
		description: "Dan's List description",
		image: "/projects/DansListSS.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 3,
		title: "Space Invader",
		description: "Space Invader description",
		image: "/projects/SpaceInvadersSS.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 4,
		title: "Movie App",
		description: "Movie App description",
		image: "/projects/MovieSS.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
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
			<h1 className="text-center text-4xl font-bold text-white mt-4">
				My Projects
			</h1>
			<div className="flex flex-row justify-center items-center gap-2 mt-3 py-6">
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
				className="grid md:grid-cols-3 gap-8 md:gap-12 content-center">
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
