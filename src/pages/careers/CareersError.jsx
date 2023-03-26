import { useRouteError, Link } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <div className="careers-error">
      <p>{error.message}</p>
      <p>
        Back to <Link to="/">homepage</Link>
      </p>
    </div>
  );
};

export default CareersError;
