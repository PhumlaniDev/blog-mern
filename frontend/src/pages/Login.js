import { FaSignInAlt } from "react-icons/fa";
import { useLogin } from "../hook/useLogin";

function Login() {
	const { email, password, onChange, onSubmit } = useLogin();
	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt />
					Login
				</h1>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Enter an email address"
							value={email}
							onChange={onChange}
						/>
					</div>

					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							placeholder="Enter a password"
							value={password}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-block">
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Login;
