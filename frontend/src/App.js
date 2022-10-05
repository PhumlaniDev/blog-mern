import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import Write from "./pages/Write";

function App() {
	return (
		<div className="app">
			<div className="container">
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />}></Route>
						<Route path="/register" element={<Register />}></Route>
						<Route path="/write" element={<Write />}></Route>
						<Route path="/blog" element={<Blog />}></Route>
					</Routes>
					<Footer />
				</Router>
			</div>
			<ToastContainer />
		</div>
	);
}

export default App;
