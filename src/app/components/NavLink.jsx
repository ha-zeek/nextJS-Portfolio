import Link from "next/link";

const NavLink = ({ href, title }) => {
	return (
		<Link
			href={href}
			class="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
			{title}
		</Link>
	);
};

export default NavLink;
