import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Login = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div className="title">
				<h1>Login</h1>
			</div>
			<div className="about-container">
				<p>
					<TextField fullWidth id="username" label="User Name" variant="outlined" />
				</p>
				
				<br/>
				<p>
				<TextField fullWidth id="password" label="User Password" variant="outlined" />
				</p>
<br/>
<br/>
				<Button variant="contained" color="success">
				Login
				</Button>
			</div>
		</div>
	);
};

export default Login;
