import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/login" element={<Login />}></Route>
						<Route path="/register" element={<Register />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
					</Routes>

					<h1>Hello Phumlani and World 😄</h1>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;