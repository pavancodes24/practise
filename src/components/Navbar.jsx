import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "50px", justifyContent: "center" }}>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/profile">
        <button>profile</button>
      </Link>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </div>
  );
};
