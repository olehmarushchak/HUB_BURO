import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <Link to={"/"} className="Footer__address">
        UKRAINE, kyiv, KHRESHATYK 21
      </Link>

      <ul className="Footer__list">
        <li className="Footer__list__item">
          <Link className="Footer__list__link Footer__list__link--facebook" to={"/"}>
            facebook
          </Link>
        </li>

        <li className="Footer__list__item">
          <Link className="Footer__list__link Footer__list__link--instagram" to={"/"}>
            instagram
          </Link>
        </li>

        <li className="Footer__list__item">
          <Link className="Footer__list__link Footer__list__link--linkedin" to={"/"}>
            career
          </Link>
        </li>
      </ul>
    </footer>
  );
};
