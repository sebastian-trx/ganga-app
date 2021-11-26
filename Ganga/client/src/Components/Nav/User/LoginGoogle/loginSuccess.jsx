import { useEffect } from "react";

export default function LoginSuccess() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 500);
  }, []);

  return <div>Thanks for loggin in!</div>;
}
