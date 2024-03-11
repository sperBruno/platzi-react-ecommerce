import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCardContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

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
            onClick={() => {
              context.setSearchByCategory(null);
            }}
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
            onClick={() => {
              context.setSearchByCategory("cloth");
            }}
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => {
              context.setSearchByCategory("electronics");
            }}
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
            onClick={() => {
              context.setSearchByCategory("fornitures");
            }}
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
            onClick={() => {
              context.setSearchByCategory("toys");
            }}
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
            onClick={() => {
              context.setSearchByCategory("others");
            }}
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
        <li className="flex justify-center">
          <ShoppingBagIcon className="h-6 w-6 text-black-500" />
          <div>{context.cardProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
