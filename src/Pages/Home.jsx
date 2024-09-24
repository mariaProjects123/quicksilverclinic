import { Link } from 'react-router-dom';
import logo from '../qs_logo.png';

const Home = () => {
	return (
		<div className="container">
			<div className="banner-container">
				<div className="banner">

					
					<img src={logo} alt="logo" />
						<p>
						Welcome to Quicksilver Clinic!
						
						</p>

              		

					
					<Link to="/login">
						<div className="btn">Login</div>
					</Link>

					<Link to="/register">
						<div className="btn">Register Here</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
