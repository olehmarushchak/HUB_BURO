import React from "react";
import "./Contacts.scss";

export const Contacts: React.FC = () => {
  return (
    <div className="Contacts__center">
      <section className="Contacts">
        <h2 className="Contacts__title">Contacts</h2>

        <div className="Contacts__sections">
          <div className="Contacts__section">
            <p className="Contacts__section__info">Visit us</p>
            <h3 className="Contacts__section__title">address</h3>

            <ul className="Contacts__section__list">
              <li className="Contacts__section__list__item">
                <a className="Contacts__section__list__link" href="#">
                  ukraine, kyiv, Khreshatyk 21
                </a>
              </li>
            </ul>
          </div>

          <div className="Contacts__section">
            <p className="Contacts__section__info">Visit us</p>
            <h3 className="Contacts__section__title">Phone</h3>

            <ul className="Contacts__section__list">
              <li className="Contacts__section__list__item">
                <a
                  className="Contacts__section__list__link"
                  href="callto:+3809351932"
                >
                  +380 93 51 932
                </a>
              </li>
              <li className="Contacts__section__list__item">
                <a
                  className="Contacts__section__list__link"
                  href="callto:+3809351932"
                >
                  +380 93 51 932
                </a>
              </li>
            </ul>
          </div>

          <div className="Contacts__section">
            <p className="Contacts__section__info">Visit us</p>
            <h3 className="Contacts__section__title">e-mail</h3>

            <ul className="Contacts__section__list">
              <li className="Contacts__section__list__item">
                <a
                  className="Contacts__section__list__link"
                  href="mailto:hab_buro134@gmail.com"
                >
                  hab_buro134@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
