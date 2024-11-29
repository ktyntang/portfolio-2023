import { useState } from "react";
import BgMouseHover from "./components/BgMouseHover";
import "./App.css";
import "./components/Banner.css";
import { ABOUT, HOME, PROJECTS, SKILLS } from "./constants";
import SocialBar from "./components/SocialBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

const NameCardL = ({ route }) => {
	return (
		<div
			id='namecard-L'
			className='flex w-fit flex-1 flex-col text-left'
			style={{ animation: "fadeZoomIn 0.8s ease-out" }}
		>
			{/* <h1 className='text-6xl sm:text-8xl md:text-8xl lg:text-9xl'>
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
			</h1> */}
			<h1 className='text-6xl sm:text-8xl md:text-8xl lg:text-9xl'>
				<div className='block text-nowrap leading-10'>
					<div className='font-flyingpeace inline-block'>k</div>
					<div className='font-floral font inline-block tracking-widest'>ay</div>
				</div>
				<span className='font-floral'>m</span>
				<span className='font-flyingpeace'>a</span>
				<span className='font-floral tracking-wider'>c</span>
				<span className='font-flyingpeace'>k</span>
				<span className='font-floral pl-1 tracking-widest'>li</span>
				<span className='font-flyingpeace'>n</span>
			</h1>
			<p className='font-rastaglion ml-1'>{route !== HOME ? "Fullstack Developer" : "Open To Work"}</p>
		</div>
	);
};

const NameCardR = () => {
	return (
		<div id='namecard-R' className='font-rastaglion absolute bottom-4 right-6 w-full'>
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

function App() {
	const [route, setRoute] = useState(HOME);

	function changeRoute(route) {
		setRoute(route);
	}

	return (
		<div className='h-full'>
			<BgMouseHover />

			<div className='max-w relative z-10 m-auto h-full max-w-7xl px-6 py-4'>
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
		</div>
	);
}

export default App;
