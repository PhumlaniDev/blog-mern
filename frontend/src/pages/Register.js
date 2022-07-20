import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { FaUser } from "react-icons/fa";
import Spinner from "../components/Spinner";
import { useRegister } from "../hook/useRegister";

function Register() {
	const { name, email, password, confirmPassword, onChange } = useRegister();
	const { isLoading, isError, isSuccess, message, user } = useSelector(
		(state) => state.auth
	);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate("/");
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
		} else {
			const userData = {
				name,
				email,
				password,
			};
			dispatch(register(userData));
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

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
