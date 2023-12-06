"use client";
import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
					<Link href={gitUrl} className="h-14 w-14  relative rounded-full ">
						<svg
							className="w-10 h-10 text-gray-400 m-2 cursor-pointer hover:text-white"
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
					<Link href={previewUrl} className="h-14 w-14  relative rounded-full ">
						<svg
							className="w-10 h-10 text-gray-400 m-2 cursor-pointer hover:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 19 19">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"
							/>
						</svg>
					</Link>
				</div>
			</div>
			<div className="text-white rounded-b-xl bg-gray-900 py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<p className="text-gray-200">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
