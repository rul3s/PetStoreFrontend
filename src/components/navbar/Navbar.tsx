import "./navbar.scss";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="brand">Pet Store</div>
      <div className="hamburguer">
        <Menu />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products/add">Add Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
