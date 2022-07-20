import { FaUser } from "react-icons/fa";
import { useRegister } from "../hook/useRegister";

function Register() {
	const { name, email, password, confirmPassword, onSubmit, onChange } =
		useRegister();

	return (
		<>
			<section className="heading">
				<h1>
					<FaUser />
					Register
				</h1>
				<p>Register create an account</p>
			</section>

			<section className="form">
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
		</>
	);
}

export default Register;
