import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PageNavBar from "./components/pagenavbar";
import HomeFeed from "./feeds/homefeed";

function MainApp() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/");
    }
  }, []);


  



  return (
    <>
    <HomeFeed/>
    <PageNavBar/>
    </>
)
}

export default MainApp;