import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import cn from "classnames";
import { Pathname } from "../../types/pathname.ts";

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="Header">
      <NavLink className="Header__logo" to={"/"}></NavLink>

      <ul className="Header__list">
        <li className="Header__list__item">
          <NavLink
            className={cn("Header__list__link", {
              "Header__list__link--active": pathname.includes(
                Pathname.PORTFOLIO
              ),
            })}
            to={"portfolio"}
          >
            Portfolio
          </NavLink>
        </li>

        <li className="Header__list__item">
          <NavLink
            className={cn("Header__list__link", {
              "Header__list__link--active": pathname.includes(
                Pathname["ABOUT-US"]
              ),
            })}
            to={"about-us"}
          >
            About Us
          </NavLink>
        </li>

        <li className="Header__list__item">
          <NavLink
            className={cn("Header__list__link", {
              "Header__list__link--active": pathname.includes(
                Pathname.CONTACTS
              ),
            })}
            to={"contacts"}
          >
            contacts
          </NavLink>
        </li>
      </ul>

      <div className="Header__language">
        <NavLink
          className={cn("Header__language__link", {
            "Header__language__link--active": true,
          })}
          to={"ua"}
        >
          UA
        </NavLink>

        <NavLink
          className={cn("Header__language__link", {
            "Header__language__link--active": false,
          })}
          to={"en"}
        >
          EN
        </NavLink>
      </div>
    </header>
  );
};
