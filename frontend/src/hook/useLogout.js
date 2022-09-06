import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

export const useLogout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	return { onLogout };
};
