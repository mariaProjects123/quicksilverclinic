import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav>
				<div className="nav-items container">
					<div className="logo">
						<a href="/">
							<h1>Quicksilver Clinic</h1>
						</a>
					</div>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/login">Login</NavLink>
						</li>
						<li>
							<NavLink to="/register">Registration</NavLink>
						</li>
						<li>
							<NavLink to="/medical">Medical Information</NavLink>
						</li>
						<li>
							<NavLink to="/appointments">Appointments</NavLink>
						</li>
						<li>
							<NavLink to="/about">About Us</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
