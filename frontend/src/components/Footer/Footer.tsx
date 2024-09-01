import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="Footer phone-media-footer">
      <div className="gif__background"></div>

      <div className="Footer__address__container">
        <Link to={"/"} className="Footer__address">
          UKRAINE, kyiv, KHRESHATYK 21
        </Link>
      </div>

      <div className="Footer__list__container">
        <ul className="Footer__list phone-media-footer__list">
          <li className="Footer__list__item">
            <Link
              className="Footer__list__link Footer__list__link--facebook"
              to={"/"}
            >
              facebook
            </Link>
          </li>
          <li className="Footer__list__item">
            <Link
              className="Footer__list__link Footer__list__link--instagram"
              to={"/"}
            >
              instagram
            </Link>
          </li>
          <li className="Footer__list__item">
            <Link
              className="Footer__list__link Footer__list__link--linkedin"
              to={"/"}
            >
              career
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
