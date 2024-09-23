import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LogInPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogIn = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('User Context Ricardo');

    navigate(lastPath, {
      replace: true 
    });
  }

  return (
    <div className="container mt-5">
      <h1>LogIn</h1>
      <hr />

      <button className="btn btn-primary"
      onClick={onLogIn}>
        LogIn
      </button>
    </div>
  )
}
