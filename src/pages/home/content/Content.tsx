import "./content.scss";

import Contact from "./contact/Contact";

const Content = () => {
	return (
		<div className="content">
			<img className="picture" src="/assets/emilien.jpg" alt="Émilien" />
			<h1>Émilien Déon</h1>
			<p className="description">
				Développeur et intégrateur front-end de sites vitrines et d&apos;applications web
			</p>
			<Contact />
		</div>
	);
};

export default Content;
