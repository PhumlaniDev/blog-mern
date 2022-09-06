import { FaUser } from "react-icons/fa";
import Spinner from "../components/Spinner";
import { useRegister } from "../hook/useRegister";
import { useSelector } from "react-redux";

function Register() {
	const { name, email, password, confirmPassword, onChange, onSubmit } =
		useRegister();

	const { isLoading } = useSelector((state) => state.auth);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className="wrapper">
			<section>
				<h1>
					<FaUser />
					Register
				</h1>
				<p>Register create an account</p>
			</section>

			<section>
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							placeholder="Enter your name"
							value={name}
							onChange={onChange}
						/>
					</div>
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
						<input
							type="password"
							className="form-control"
							id="confirmPassword"
							name="confirmPassword"
							placeholder="Confirm your password"
							value={confirmPassword}
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

export default Register;
