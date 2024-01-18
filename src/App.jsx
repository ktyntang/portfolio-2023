// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

import { useState } from "react";
import BgMouseHover from "./components/BgMouseHover";
import SocialBubble from "./components/SocialBubble";
import "./App.css";
import "./components/Banner.css";
import { ParallaxProvider } from "react-scroll-parallax";

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
		<div
			id='banner'
			className='mx-auto flex h-screen w-fit flex-col items-start justify-center'
			style={{ animation: "fadeZoomIn 0.8s ease-in-out" }}
		>
			<h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
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
				</span>{" "}
				Tang
			</h1>
			<div className='mt-3 flex w-fit text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
				<h2>Your</h2>
				<h2 className='rotate-words relative mx-1 h-7 w-20 overflow-hidden font-bold text-violet-400'>
					<span style={{ "--i": 0 }}>reliable</span>
					<span style={{ "--i": 1 }}>friendly</span>
					<span style={{ "--i": 2 }}>sensible</span>
				</h2>
				<h2>fullstack software engineer.</h2>
			</div>
			<p className='mt-3 max-w-xs whitespace-nowrap leading-normal'>
				I build organized and purposeful systems for the web.
			</p>
			<a target='_blank' rel='noreferrer' href='ResumeDev_17Oct.pdf'>
				<button className='btn btn-violet mt-8 w-fit rounded-full border border-violet-400 px-2 py-1'>
					Resume
					<i
						className={`fas fa-file-pdf
				 m-0 p-0`}
					></i>
				</button>
			</a>
		</div>
	);
};

const NameCard = () => {
	return (
		<div className='m-auto flex h-full w-full flex-row'>
			<div
				id='namecard-L'
				className='flex w-fit flex-1 flex-col text-left'
				style={{ animation: "fadeZoomIn 0.8s ease-in-out" }}
			>
				<h1 className='text-7xl sm:text-7xl md:text-9xl'>
					<div className='block text-nowrap leading-10'>
						<div className='font-floral inline-block'>k</div>
						<div className='inline-block font-black'>-</div>
						<div className='font-floral inline-block'>t</div>
						<div className='font-flyingpeace inline-block px-1'>y</div>
						<div className='font-flyingpeace inline-block'>n</div>
					</div>
					<span className='font-floral'>t</span>
					<span className='font-flyingpeace'>a</span>
					<span className='font-floral px-1'>n</span>
					<span className='font-flyingpeace'>g</span>
				</h1>
				<p className='font-rastaglion'>blah blah</p>
			</div>
			<div id='namecard-R' className='font-rastaglion flex w-full grow flex-col'>
				<h2 className='mt-auto flex flex-col text-right'>
					<span className='text-2xl'>Your</span>
					<h2 className='rotate-words relative ml-auto h-7 w-24 overflow-hidden text-left text-2xl font-bold text-violet-400'>
						<span style={{ "--i": 0 }}>reliable</span>
						<span style={{ "--i": 1 }}>friendly</span>
						<span style={{ "--i": 2 }}>sensible</span>
					</h2>
					<span className='text-4xl sm:text-6xl md:text-8xl'>
						Fullstack <br /> Developer
					</span>
				</h2>
			</div>
		</div>
	);
};

const Skills = () => {
	return (
		<div
			className='mx-auto flex h-screen w-fit flex-col items-start justify-center'
			style={{ animation: "fadeZoomIn 0.8s ease-in-out" }}
		></div>
	);
};

const NavBar = () => {
	return (
		<>
			<div id='navbar' className='font-rastaglion absolute bottom-4 left-0 flex w-fit flex-col text-2xl'>
				<a href='#about' className='text-left text-slate-200 hover:text-violet-400'>
					<span></span>
					About
				</a>

				<a href='#skills' className=' text-left text-slate-200 hover:text-violet-400'>
					<span></span>
					Skills
				</a>
				<a href='#projects' className='text-left text-slate-200 hover:text-violet-400'>
					<span></span>
					Projects <i className='fa fa-code text-base text-violet-400'></i>
				</a>
			</div>
			<span id='symbol'></span>
		</>
	);
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className=''>
			<ParallaxProvider>
				<BgMouseHover />

				<div className='container relative z-10 m-auto h-screen py-4'>
					{/* <NavBar /> */}
					<div className='social-links absolute right-0 top-2 flex w-fit flex-col'>
						<SocialBubble
							icon='fab fa-linkedin'
							link='https://www.linkedin.com/in/ktyntang/'
							title='LinkedIn'
						/>
						<SocialBubble icon='fab fa-github' link='https://www.github.com/ktyntang' title='GitHub' />
						<SocialBubble icon='fas fa-envelope' link='mailto:ktyntang@gmail.com' title='Email' />
						<SocialBubble icon='fas fa-file-pdf' link='ResumeDev_17Oct.pdf' title='Resume' />
					</div>

					{/* <Banner /> */}

					<NameCard />
					<NavBar />

					{/* <Skills /> */}
					{/* <Projects /> */}
					{/* <Contact /> */}
					{/* <Footer /> */}
				</div>
			</ParallaxProvider>
		</div>
	);
}

export default App;
