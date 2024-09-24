//TODO: small screen font size issues
const Projects = () => {
	return (
		<div className='ml-auto mt-auto w-fit max-w-96 pb-6 text-right' id='projects'>
			<h2 className='font-rastaglion mb-3 text-lg sm:text-2xl'>Design Develop Deploy</h2>

			<ul className='font-montserrat text-right text-sm text-white sm:text-base md:text-lg'>
				<li className='text-xs'>
					2024 <span className='hidden sm:inline-block'>Professional</span> / Fullstack
					<a className='ml-1 block text-sm font-medium  text-white sm:inline-block sm:text-base sm:font-semibold md:text-lg md:font-bold '>
						Geospatial Web App
					</a>
				</li>
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
					2022 <span className='hidden sm:inline-block'>Commission</span> / Artist Portfolio
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
					2023 <span className='hidden sm:inline-block'>Commission</span> / NFT Gallery
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

export default Projects;
