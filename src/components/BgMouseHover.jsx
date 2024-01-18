import { useRef } from "react";

const BgMouseHover = () => {
	const mouseBlobRef = useRef(null);

	window.onpointermove = (event) => {
		const { clientX, clientY } = event;

		console.log(mouseBlobRef.current, clientX, clientY);
		if (mouseBlobRef.current === null) return;

		mouseBlobRef.current.animate(
			{
				left: `${clientX}px`,
				top: `${clientY}px`,
			},
			{ duration: 3000, fill: "forwards" },
		);
	};
	return (
		<div className='z-0' id='background'>
			<div id='blob' ref={mouseBlobRef} />
			<div id='blur' />
		</div>
	);
};

export default BgMouseHover;
