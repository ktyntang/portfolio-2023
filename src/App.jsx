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

const HOME = "home";
const ABOUT = "about";
const SKILLS = "skills";
const PROJECTS = "projects";

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

const About = () => {
	return (
		<div className='ml-auto mt-auto w-fit max-w-96 pb-6 text-right' id='about'>
			<h2 className='font-rastaglion mb-3 text-lg sm:text-2xl'>I believe</h2>

			<p className='font-montserrat whitespace-break-spaces text-right text-sm text-white sm:text-base md:text-lg'>
				in building purposeful and organized systems for the web. The tech landscape is ever-changing and
				adaptability is key but regardless of the tools used, I am a strong advocate for clear communication,
				clean code and good architecture for context-appropriate solutions.
			</p>
		</div>
	);
};

const Skills = () => {
	return (
		<div className='ml-auto mt-auto w-fit max-w-96 pb-6 text-right' id='skills'>
			<h2 className='font-rastaglion mb-4 text-lg leading-none sm:text-2xl'>
				My tech stack <br /> <span className='text-sm sm:text-lg'>(so far)</span>
			</h2>
			<table className='font-montserrat text-left text-xs text-white sm:text-base md:text-lg'>
				<tbody>
					<tr className='border-b-[0.5px] border-violet-200/50 leading-loose'>
						{/* <th className='m-0 p-0 align-top font-normal'>Frontend</th> */}
						<td>React - JS - TS - CSS - Tailwind - HTML</td>
					</tr>
					<tr className='border-b-[0.5px] border-violet-200/50 leading-loose'>
						{/* <th className='m-0 p-0 align-top font-normal'>State</th> */}
						<td>Redux - Zustand</td>
					</tr>
					<tr className='border-b-[0.5px] border-violet-200/50 leading-loose'>
						{/* <th className='m-0 p-0 align-top font-normal'>3D</th> */}
						<td>Three.js - R3F</td>
					</tr>
					<tr className='border-b-[0.5px] border-violet-200/50 leading-loose'>
						{/* <th className='m-0 p-0 align-top font-normal'>Backend</th> */}
						<td>Node - Express - Nginx - Python - Flask</td>
					</tr>
					<tr className='border-b-[0.5px] border-violet-200/50 leading-loose'>
						{/* <th className='m-0 p-0 align-top font-normal'>Database</th> */}
						<td>Mongo - Redis - PostgreSQL</td>
					</tr>
					<tr className='border-b-[0.5px] border-violet-200/50 leading-loose'>
						{/* <th className='m-0 p-0 align-top font-normal'>Deployment</th> */}
						<td>Docker - Github Actions - Firebase - AWS</td>
					</tr>
					<tr className='border-b-[0.5px] border-violet-200/50 leading-loose'>
						{/* <th className='m-0 p-0 align-top font-normal'>Testing</th> */}
						<td>Playwright - Puppeteer - Jest - Selenium</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
const NavBar = ({ route, changeRoute }) => {
	return (
		<>
			<nav
				id='navbar'
				className='font-rastaglion absolute bottom-4 left-6 flex w-fit flex-col text-lg sm:text-2xl'
			>
				{route !== HOME && (
					<button
						className='text-left text-slate-200 hover:text-violet-400'
						onClick={() => {
							changeRoute(HOME);
						}}
					>
						<span></span>
						Home
					</button>
				)}

				<button
					className='text-left text-slate-200 hover:text-violet-400'
					onClick={() => {
						changeRoute(ABOUT);
					}}
				>
					<span></span>
					About
				</button>

				<button
					className=' text-left text-slate-200 hover:text-violet-400'
					onClick={() => {
						changeRoute(SKILLS);
					}}
				>
					<span></span>
					Skills
				</button>
				<button
					className='text-left text-slate-200 hover:text-violet-400'
					onClick={() => {
						changeRoute(PROJECTS);
					}}
				>
					<span></span>
					Projects <i className='fa fa-code text-base text-violet-400'></i>
				</button>
			</nav>
			<span id='symbol'></span>
		</>
	);
};

// const createCardFlipId = (index) => `listItem-${index}`;
// const shouldFlip = (index) => (prev, current) => index === prev || index === current;
// const ExpandedListItem = ({ index, onClick }) => {
// 	return (
// 	  <Flipped
// 		flipId={createCardFlipId(index)}
// 		stagger="card"
// 		onStart={el => {
// 		  setTimeout(() => {
// 			el.classList.add("animated-in");
// 		  }, 400);
// 		}}
// 	  >
// 		<div className="expandedListItem" onClick={() => onClick(index)}>
// 		  <Flipped inverseFlipId={createCardFlipId(index)}>
// 			<div className="expandedListItemContent">
// 			  <Flipped
// 				flipId={`avatar-${index}`}
// 				stagger="card-content"
// 				delayUntil={createCardFlipId(index)}
// 			  >
// 				<div className="avatar avatarExpanded" />
// 			  </Flipped>
// 			  <div className="description">
// 				{listData.slice(0, 3).map(i => (
// 				  <Flipped
// 					flipId={`description-${index}-${i}`}
// 					stagger="card-content"
// 					delayUntil={createCardFlipId(index)}
// 				  >
// 					<div />
// 				  </Flipped>
// 				))}
// 			  </div>
// 			  <div className="additional-content">
// 				{listData.slice(0, 3).map(i => (
// 				  <div />
// 				))}
// 			  </div>
// 			</div>
// 		  </Flipped>
// 		</div>
// 	  </Flipped>
// 	);
//   };

const SocialBar = () => {
	return (
		<div className='social-links absolute right-6 top-4 flex w-fit flex-col'>
			<SocialBubble icon='fab fa-linkedin' link='https://www.linkedin.com/in/ktyntang/' title='LinkedIn' />
			<SocialBubble icon='fab fa-github' link='https://www.github.com/ktyntang' title='GitHub' />
			<SocialBubble icon='fas fa-envelope' link='mailto:ktyntang@gmail.com' title='Email' />
			<SocialBubble icon='fas fa-file-pdf' link='ResumeDev_17Oct.pdf' title='Resume' />
		</div>
	);
};

const NameCardL = ({ route }) => {
	return (
		<div
			id='namecard-L'
			className='flex w-fit flex-1 flex-col text-left'
			style={{ animation: "fadeZoomIn 0.8s ease-out" }}
		>
			<h1 className='text-6xl sm:text-8xl md:text-8xl lg:text-9xl'>
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
			<p className='font-rastaglion ml-1'>{route !== HOME ? "Fullstack Developer" : "blahblah"}</p>
		</div>
	);
};

const NameCardR = () => {
	return (
		<div id='namecard-R' className='font-rastaglion flex w-full grow flex-col'>
			<div className='mt-auto flex flex-col text-right'>
				<span className='text-2xl'>Your</span>
				<h2 className='rotate-words relative ml-auto h-7 w-24 overflow-hidden text-left text-2xl font-bold text-violet-400'>
					<span style={{ "--i": 0 }}>reliable</span>
					<span style={{ "--i": 1 }}>friendly</span>
					<span style={{ "--i": 2 }}>sensible</span>
				</h2>
				<span className='text-4xl sm:text-7xl md:text-7xl lg:text-8xl'>
					Fullstack <br /> Developer
				</span>
			</div>
		</div>
	);
};

//TODO: small screen font size issues
const Projects = () => {
	return (
		<div className='ml-auto mt-auto w-fit max-w-96 pb-6 text-right' id='projects'>
			<h2 className='font-rastaglion mb-3 text-lg sm:text-2xl'>Design Develop Deploy</h2>

			<ul className='font-montserrat text-right text-sm text-white sm:text-base md:text-lg'>
				<li className='text-xs'>
					2024 <span className='hidden sm:inline-block'>Professional</span> / Fullstack
					<a className='ml-1 block text-sm font-medium  text-white sm:inline-block sm:text-base sm:font-semibold md:text-lg md:font-bold '>
						3D Building Inspector
					</a>
				</li>
				<li className='text-xs'>
					2023 <span className='hidden sm:inline-block'>Professional</span> / Fullstack
					<a
						className='ml-1 block text-sm font-medium  text-white sm:inline-block sm:text-base sm:font-semibold md:text-lg md:font-bold '
						href='https://www.nactengineering.com/news-2/smart-tether-com/'
						target='_blank'
						rel='noreferrer'
					>
						Real-Time Drone App
					</a>
				</li>
				<li className='text-xs'>
					2022 <span className='hidden sm:inline-block'>Comission</span> / Artist Portfolio
					<a
						className='ml-1 block text-sm font-medium  text-white sm:inline-block sm:text-base sm:font-semibold md:text-lg md:font-bold '
						href='https://2022.kspaze1.art/'
						target='_blank'
						rel='noreferrer'
					>
						Graffiti
					</a>
				</li>
				<li className='text-xs'>
					2023 <span className='hidden sm:inline-block'>Comission</span> / NFT Gallery
					<a
						className='ml-1 block text-sm font-medium  text-white sm:inline-block sm:text-base sm:font-semibold md:text-lg md:font-bold '
						href='https://kspaze1.art/'
						target='_blank'
						rel='noreferrer'
					>
						KSpaze1
					</a>
				</li>
			</ul>
		</div>
	);
};

function App() {
	const [route, setRoute] = useState(HOME);

	function changeRoute(route) {
		setRoute(route);
	}

	//add scroll listener to change route

	const handleScroll = (e) => {
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const documentHeight = document.body.scrollHeight;
		// console.log(scrollY, windowHeight, documentHeight);

		const routeSequence = [HOME, ABOUT, SKILLS, PROJECTS];
		if (scrollY + windowHeight >= documentHeight) {
			changeRoute(ABOUT);
		} else {
			changeRoute(HOME);
		}
	};

	return (
		// <div className='h-screen overflow-y-scroll' onScroll={(e) => handleScroll(e)}>
		<div>
			<BgMouseHover />

			<div className='max-w relative z-10 m-auto h-screen max-w-7xl px-6 py-4'>
				<SocialBar />

				<div className='flex h-full w-full flex-row' id='namecard'>
					<NameCardL route={route} />
					{route === HOME ? (
						<NameCardR />
					) : route === ABOUT ? (
						<About />
					) : route === SKILLS ? (
						<Skills />
					) : route === PROJECTS ? (
						<Projects />
					) : null}
				</div>

				<NavBar changeRoute={changeRoute} route={route} />
			</div>
			{/* <div className='h-10 w-full'></div> */}
		</div>
	);
}

export default App;
