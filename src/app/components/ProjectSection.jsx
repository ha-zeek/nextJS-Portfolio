"use client";

import React, { use, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

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

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectData.filter((project) =>
		project.tag.includes(tag)
	);

	return (
		<div>
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
			<div className="grid md:grid-cols-3 gap-8 md:gap-12 content-center">
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectSection;
