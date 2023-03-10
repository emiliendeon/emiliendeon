import "./samples.scss";

import Sample from "./sample/Sample";

const Samples = () => {
	return (
		<div className="samples">
			<Sample id={1} />
			<Sample id={2} />
			<Sample id={3} />
		</div>
	);
};

export default Samples;
