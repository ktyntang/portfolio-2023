import "./Banner.css";

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

export default Banner;
