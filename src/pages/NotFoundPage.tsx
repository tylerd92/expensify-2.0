import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="content-container">
    <h3>404 - Page not found</h3>
    <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
