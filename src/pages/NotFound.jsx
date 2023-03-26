import { Link } from "react-router-dom";

import NotFoundImg from "../assets/404.gif";

const NotFound = () => {
  return (
    <div>
      <img src={NotFoundImg} alt="Not found image" />
      <p>
        Go to <Link to="/">homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
