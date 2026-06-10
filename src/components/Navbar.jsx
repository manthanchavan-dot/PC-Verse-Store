import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <h2>PCVerse</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/buildpc">Build PC</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
