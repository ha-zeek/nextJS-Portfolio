import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
	const buttonStyles = isSelected
		? "text-white bg-teal-700 hover:bg-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:ring-2 focus:ring-teal-300"
		: "text-white bg-teal-700 hover:bg-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2";

	return (
		<div>
			<button className={`${buttonStyles}`} onClick={() => onClick(name)}>
				{name}
			</button>
		</div>
	);
};

export default ProjectTag;
