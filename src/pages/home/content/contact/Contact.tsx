import "./contact.scss";

import { SocialIcon } from "react-social-icons";

const Contact = () => {
	return (
		<div className="contact">
			<h2>Me contacter</h2>
			<SocialIcon
				url="https://www.linkedin.com/in/emiliendeon/"
				label="LinkedIn"
				bgColor="#ffffff"
			/>
			<SocialIcon url="https://github.com/emiliendeon" label="GitHub" bgColor="#ffffff" />
			<SocialIcon url="mailto:emilien.deon@gmail.com" label="Mail" bgColor="#ffffff" />
		</div>
	);
};

export default Contact;
