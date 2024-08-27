import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../custom-hooks/reduxHooks.ts";
import {
  initProjects,
  selectProjects,
} from "../../redux/slices/projects.slice.ts";
import { PreloadStyleForTale } from "./PeloadStyleForTale/PreloadStyleForTale.tsx";

export const HomePage: React.FC = () => {
  const { projects } = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const slideBanners = [
    "https://i.im.ge/2024/08/24/f6xkdr.main-view.jpeg",
    "https://i.im.ge/2024/08/24/f6xolq.main-view.jpeg",
    "https://i.im.ge/2024/08/24/f63PF0.main-view.jpeg",
    "https://i.im.ge/2024/08/24/f63ZWF.main-view.jpeg",
    "https://i.im.ge/2024/08/24/f6xXip.main-view.jpeg",
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  const animationOpacity = () => {
    const slideImg = document.getElementById("slideImg");

    if (slideImg) {
      slideImg.style.transition = "opacity 0.3s";
      slideImg.style.opacity = "0";

      const setTimeoutId = setTimeout(() => {
        slideImg.style.opacity = "1";

        clearTimeout(setTimeoutId);
      }, 500);
    }
  };

  const handleSlideClick = (index) => {
    animationOpacity();
    setSlideIndex(index);
  };

  useEffect(() => {
    dispatch(initProjects());

    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slideBanners.length);
      animationOpacity();
    }, 15000);

    return () => clearInterval(intervalId);
  }, [slideBanners.length]);

  return (
    <section className="HomePage">
      <div className="HomePage__top">
        <img
          id="slideImg"
          style={{ backgroundImage: `url(${slideBanners[slideIndex]})` }}
          className="HomePage__top__img"
          alt=""
        />

        <div className="HomePage__top__bottom">
          <div className="HomePage__top__text">
            <h1 className="HomePage__top__title">HUB buro</h1>
            <p className="HomePage__top__sub-title">
              explore the new collection.
            </p>
          </div>

          <button className="HomePage__top__button">Conversation</button>
        </div>

        <div className="slides__center">
          <ul className="slides">
            <ul className="slides__item">
              <button
                className={cn("slides__button", {
                  "slides__button--active": slideIndex === 0,
                })}
                onClick={() => handleSlideClick(0)}
              ></button>
            </ul>

            <ul className="slides__item">
              <button
                className={cn("slides__button", {
                  "slides__button--active": slideIndex === 1,
                })}
                onClick={() => handleSlideClick(1)}
              ></button>
            </ul>

            <ul className="slides__item">
              <button
                className={cn("slides__button", {
                  "slides__button--active": slideIndex === 2,
                })}
                onClick={() => handleSlideClick(2)}
              ></button>
            </ul>

            <ul className="slides__item">
              <button
                className={cn("slides__button", {
                  "slides__button--active": slideIndex === 3,
                })}
                onClick={() => handleSlideClick(3)}
              ></button>
            </ul>
            <ul className="slides__item">
              <button
                className={cn("slides__button", {
                  "slides__button--active": slideIndex === 4,
                })}
                onClick={() => handleSlideClick(4)}
              ></button>
            </ul>
          </ul>
        </div>
      </div>

      <div className="HomePage__categorys__center">
        <div className="HomePage__categorys">
          <div className="HomePage__categorys__title">
            <h2 className="HomePage__categorys__title__h2">
              Selected Projects
            </h2>

            <Link className="HomePage__categorys__title__view-all" to={"/"}>
              view all
            </Link>
          </div>

          <div className="HomePage__categorys__category">
            <ul className="HomePage__categorys__category__list">
              <li className="HomePage__categorys__category__list__item">
                <span className="HomePage__categorys__category__list__link">
                  exterior
                </span>
              </li>

              <li className="HomePage__categorys__category__list__item">
                <span className="HomePage__categorys__category__list__link">
                  interior
                </span>
              </li>

              <li className="HomePage__categorys__category__list__item">
                <span className="HomePage__categorys__category__list__link">
                  landscape
                </span>
              </li>
            </ul>
          </div>

          <ul className="HomePage__categorys__projects-list">
            <button className="HomePage__categorys__projects-list__button HomePage__categorys__projects-list__button--left"></button>
            {!projects.length &&
              [1, 2, 3, 4, 5].map((element) => (
                <PreloadStyleForTale key={element} />
              ))}
            {projects
              .filter((project) => project.category === "interior-design")
              .map((project) => (
                <li
                  className="HomePage__categorys__projects-list__project"
                  key={project.id}
                >
                  <img
                    className="HomePage__categorys__projects-list__img"
                    src={project.mainimg}
                    alt="img"
                  />
                  <h3 className="HomePage__categorys__projects-list__title">
                    {project.title}
                  </h3>
                </li>
              ))}
            <button className="HomePage__categorys__projects-list__button HomePage__categorys__projects-list__button--right"></button>
          </ul>
        </div>
      </div>
    </section>
  );
};
