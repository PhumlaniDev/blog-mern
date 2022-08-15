import "react-toastify/dist/ReactToastify.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import BlogForm from "./pages/BlogForm";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<Router>
				<div>
					<Header />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/login" element={<Login />}></Route>
						<Route path="/register" element={<Register />}></Route>
						<Route path="/write" element={<BlogForm />}></Route>
					</Routes>
					<Footer />
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
