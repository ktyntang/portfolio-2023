import { ABOUT, HOME, PROJECTS, SKILLS } from "../constants";

const NavBar = ({ route, changeRoute }) => {
	return (
		<>
			<nav
				id='navbar'
				className='font-rastaglion absolute bottom-[calc(100%-22rem)] left-6 flex w-fit flex-col text-lg  min-[380px]:bottom-4 sm:text-2xl'
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

export default NavBar;
