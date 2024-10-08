import SocialBubble from "./SocialBubble";

const SocialBar = () => {
	return (
		<div className='social-links absolute right-6 top-4 flex w-fit flex-col'>
			<SocialBubble icon='fab fa-linkedin' link='https://www.linkedin.com/in/ktyntang/' title='LinkedIn' />
			<SocialBubble icon='fas fa-envelope' link='mailto:ktyntang@gmail.com' title='Email' />
			<SocialBubble icon='fab fa-github' link='https://www.github.com/ktyntang' title='GitHub' />
			<SocialBubble icon='fas fa-file-pdf' link='K-Tyn_Tang-Full_Stack_Engineer.pdf' title='Resume' />
		</div>
	);
};

export default SocialBar;
