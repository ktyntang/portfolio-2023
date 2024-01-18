const SocialBubble = (props) => {
	const { link, icon } = props;
	return (
		<button className='block bg-transparent' style={{ padding: "0.3em 0.6em" }}>
			<a href={link} target='_blank' rel='noreferrer' {...props}>
				<i className={`${icon} m-0 p-0`}></i>
			</a>
		</button>
	);
};

export default SocialBubble;
