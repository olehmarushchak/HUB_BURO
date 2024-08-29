import React from "react";
import "./AboutUs.scss";
import { TEAM } from "../../const.ts";
import { MemberOfTeam } from "./MemberOfTeam/MemberOfTeam.tsx";

export const AboutUs: React.FC = () => {
  return (
    <div className="AboutUs__center">
      <section className="AboutUs">
        <div className="AboutUs__top">
          <section className="AboutUs__top__section">
            <h2 className="AboutUs__title">Who we are</h2>

            <p className="AboutUs__top__text">
              HAB buro is an architecture and interior design studio founded in
              2022 in Chernivtsi, Ukraine. It is a space where ideas and
              solutions come together.
              <br />
              <br />
              Our team works on residential, commercial, and corporate projects
              in Ukraine and Europe.
              <br />
              <br />
              We believe that beauty and craftsmanship is an individuality that
              is made up of details. Details transform drawings and images into
              a tangible embodiment that should inspire and deliver function.
            </p>
          </section>

          <section className="AboutUs__top__section">
            <h2 className="AboutUs__title">what we do</h2>

            <ul className="AboutUs__top__section__list">
              <li className="AboutUs__top__section__list__item">
                Passive house, active house, nZEB design
              </li>

              <li className="AboutUs__top__section__list__item">
                Architectural design
              </li>

              <li className="AboutUs__top__section__list__item">
                Interior design
              </li>

              <li className="AboutUs__top__section__list__item">
                Reconstruction, restoration and renovation
              </li>

              <li className="AboutUs__top__section__list__item">
                Supervision, support and project management
              </li>
            </ul>
          </section>

          <section className="AboutUs__top__img__container">
            <img
              className="AboutUs__top__img"
              src="../../../public/about-img.jpg"
              alt=""
            />
          </section>

          <section className="AboutUs__top__section">
            <h2 className="AboutUs__title">join the hab buro team</h2>

            <p className="AboutUs__top__text">
              We are always looking for enthusiastic ambitious people. Dynamic
              award-winning team for your growth. Let’s shape the future of
              design together! We are a open to new opportunities and happy to
              welcome new talents to our team. Fill out the form, and our team
              member will reach out to you shortly!
            </p>
          </section>

          <div className="AboutUs__top__button__center">
            <button className="AboutUs__top__button">conversation</button>
          </div>
        </div>

        <div className="AboutUs__bottom">
          <h2 className="AboutUs__title">The team</h2>

          <ul className="AboutUs__bottom__team">
            {TEAM.map((member) => (
              <MemberOfTeam
                key={member.name}
                name={member.name}
                role={member.role}
                photo={member.photo}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
