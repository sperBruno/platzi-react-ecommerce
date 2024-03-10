import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCardContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingCardContext);
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronic"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            electronic
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to="/fornitures"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            bruno@test.com
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            My Account
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to="/my-order"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            My Order
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Sign In
          </NavLink>
        </li>
        <li>🗃️ {context.count}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
