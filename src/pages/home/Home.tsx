import "./home.scss";

import Content from "./content/Content";
import Samples from "./samples/Samples";

const Home = () => {
	return (
		<div id="home">
			<Samples />
			<Content />
		</div>
	);
};

export default Home;
