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

export default Skills;
