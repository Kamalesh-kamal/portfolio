import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Sorry! Somthing went wrong</h1>
      <h2>{error.message}</h2>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default Error;
