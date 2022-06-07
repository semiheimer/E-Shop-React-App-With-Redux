import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import backgroundImage from "../assets/nothingfound.jpg";

function NothingFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }, [navigate]);

  return (
    <div>
      <img
        style={{ width: "100%", height: "100%" }}
        src={backgroundImage}
        alt=""
      ></img>
    </div>
  );
}

export default NothingFoundPage;
