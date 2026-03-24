import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function MainApp() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/");
    }
  }, []);


  

  return (


  <h1>Main app</h1>
)
}

export default MainApp;