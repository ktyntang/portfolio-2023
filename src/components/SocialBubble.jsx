const SocialBubble = (props) => {
	const { link, icon } = props;
	return (
		<button className='social-bubble my-1 block aspect-square bg-transparent'>
			<a href={link} target='_blank' rel='noreferrer' {...props}>
				<i className={`${icon} m-0 p-0`}></i>
			</a>
		</button>
	);
};

export default SocialBubble;
