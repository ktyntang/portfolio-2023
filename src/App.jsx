import { useState } from "react";
import BgMouseHover from "./components/BgMouseHover";
// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

import "./App.css";
import "./components/Banner.css";

const Banner = () => {
	const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

	const animate = (star) => {
		star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
		star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

		star.style.animation = "none";
		star.offsetHeight;
		star.style.animation = "";
	};

	let timeouts = [],
		intervals = [];

	const handleMouseEnter = () => {
		let index = 1;
		for (const star of document.getElementsByClassName("magic-star")) {
			timeouts.push(
				setTimeout(() => {
					animate(star);

					intervals.push(setInterval(() => animate(star), 1000));
				}, index++ * 300),
			);
		}
	};
	const handleMouseLeave = () => {
		for (const t of timeouts) clearTimeout(t);
		for (const i of intervals) clearInterval(i);

		timeouts = [];
		intervals = [];
	};

	return (
		<div className='container flex flex-col justify-center' id='banner'>
			<h1>
				{`Hi I'm`}
				<span className='magic' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<span className='magic-star'>
						<svg viewBox='0 0 512 512'>
							<path d='M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z' />
						</svg>
					</span>
					<span className='magic-star'>
						<svg viewBox='0 0 512 512'>
							<path d='M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z' />
						</svg>
					</span>
					<span className='magic-star'>
						<svg viewBox='0 0 512 512'>
							<path d='M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z' />
						</svg>
					</span>
					<span className='magic-text ml-4'>K-Tyn</span>
				</span>
			</h1>
			<div className='mx-auto flex w-fit'>
				<p>Your</p>
				<p
					className='rotate-words relative mx-1 h-6 overflow-hidden font-bold text-violet-400'
					style={{ width: "4.1rem" }}
				>
					<span style={{ "--i": 0 }}>reliable</span>
					<span style={{ "--i": 1 }}>friendly</span>
					<span style={{ "--i": 2 }}>sensible</span>
				</p>
				<p>fullstack software engineer.</p>
			</div>
		</div>
	);
};

const SocialBubble = ({ icon, link }) => {
	return (
		<button
			// className='border-1 m-1 rounded-full  border-violet-700 bg-transparent'
			className='block bg-transparent'
			style={{ padding: "0.3em 0.6em" }}
		>
			<a href={link} target='_blank' rel='noreferrer'>
				<i className={`${icon} m-0 p-0`}></i>
			</a>
		</button>
	);
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BgMouseHover />

			<div className='relative z-10'>
				{/* <NavBar /> */}
				<div className='social-links absolute right-4 top-4 flex w-fit flex-col'>
					<SocialBubble
						icon='fab fa-linkedin'
						link='https://www.linkedin.com/in/ktyntang/'
						title='LinkedIn'
					/>
					<SocialBubble icon='fab fa-github' link='https://www.github.com/ktyntang' title='GitHub' />
					<SocialBubble icon='fas fa-envelope' link='mailto:ktyntang@gmail.com' title='Email' />
				</div>

				<Banner />
				{/* <Skills /> */}
				{/* <Projects /> */}
				{/* <Contact /> */}
				{/* <Footer /> */}
			</div>
		</>
	);
}

export default App;
