import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
//import Appointments from './Pages/Appointments';
const Home = lazy(() => import('./Pages/Home'));
const Medical = lazy(() => import('./Pages/Medical'));
const Products = lazy(() => import('./Pages/Products'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const NoMatch = lazy(() => import('./Components/NoMatch'));
const Login = lazy(() => import('./Pages/Login'));
const Register = lazy(() => import('./Pages/Register'));
const Appointments = lazy(() => import('./Pages/Appointments'));
const About = lazy(() => import('./Pages/About'));

const App = () => {
	return (
		<>
			<NavBar />
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/appointments" element={<Appointments />} />
					<Route path="/medical" element={<Medical />} />
					<Route path="/about" element={<About />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:slug" element={<ProductDetails />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;
