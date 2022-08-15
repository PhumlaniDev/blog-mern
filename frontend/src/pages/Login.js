import { FaSignInAlt } from "react-icons/fa";
import Spinner from "../components/Spinner";
import { useLogin } from "../hook/useLogin";
import { useSelector } from "react-redux";

function Login() {
	const { email, password, onChange, onSubmit } = useLogin();

	const { isLoading } = useSelector((state) => state.auth);

	if (isLoading) {
		<Spinner />;
	}

	return (
		<div className="wrapper">
			<section>
				<h1>
					<FaSignInAlt />
					Login
				</h1>
			</section>

			<section>
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
		</div>
	);
}

export default Login;
