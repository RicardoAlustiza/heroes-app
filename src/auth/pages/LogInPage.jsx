import { useNavigate } from "react-router-dom";

export const LogInPage = () => {

  const navigate = useNavigate();

  const onLogIn = () => {
    navigate('/', {
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
