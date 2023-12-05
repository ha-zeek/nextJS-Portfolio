"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
	useEffect(() => {
		initFlowbite();
	}, []);

	return (
		<main className="flex min-h-screen flex-col bg-black">
			<Navbar />
			<div className="container mx-auto px-4 py-4">
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<EmailSection />
			</div>
			<FooterSection />
		</main>
	);
}
