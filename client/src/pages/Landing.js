import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
	return (
		<main>
			<nav>
				<img src={logo} alt="jobify" className="logo" />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						I'm baby meggings listicle mlkshk narwhal ugh semiotics.
						Keffiyeh gluten-free flannel selvage. Williamsburg YOLO
						drinking vinegar, iPhone raclette schlitz twee beard
						wolf portland post-ironic banh mi single-origin coffee.
						Enamel pin austin bicycle rights cornhole franzen
						pour-over squid whatever asymmetrical. Lo-fi tattooed
						90's selfies tacos raw denim tumeric +1 narwhal four
						loko.
					</p>
					<button className="btn btn-hero">Login/Register</button>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</main>
	);
};
export default Landing;
