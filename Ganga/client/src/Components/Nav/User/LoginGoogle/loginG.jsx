import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoGoogle } from "../../../Redux/Actions/actions";
import { FaGoogle } from "react-icons/fa";

export function LoginG(params) {
  const dispatch = useDispatch();
  const { getInfoGoogle } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);

  console.log(getInfoGoogle.login);

  function redirectToGoogleLogin() {
    const googleLoginURL = "http://localhost:3001/loginGoogle";
    window.open(googleLoginURL, "_blank", "width=500,height=600");
  }
  return (
    <>
      {/* <button onClick={redirectToGoogleLogin}>google login</button> */}
      <button onClick={redirectToGoogleLogin}>
        <FaGoogle /> Crear cuenta
      </button>
    </>
  );
}
