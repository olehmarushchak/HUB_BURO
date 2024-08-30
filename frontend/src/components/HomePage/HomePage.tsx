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
  setContactsForm,
} from "../../redux/slices/projects.slice.ts";
import { SIZE__PROJECT__IMG, SLIDER__LENGTH } from "../../const.ts";
import { Category } from "../../types/categorys.ts";
import { RenderProjects } from "./RenderProjects/RenderProjects.tsx";

export const HomePage: React.FC = () => {
  const { projects } = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState(Category.EXTERIOR);

  const visibleProjects = projects
    .filter((project) => project.category === category)
    .slice(0, 6);

  const tour3D = projects.filter(
    (project) =>
      project.title === "Kunisovska beauty salon" ||
      project.title === "Yevropeiskyi kvartal"
  );

  const firstProjectsWith3Dtour = tour3D.concat(projects.slice(7, 9));

  const [slideIndex, setSlideIndex] = useState(0);

  const animationOpacity = () => {
    const slideImg = document.getElementById("slideImg");

    if (slideImg) {
      slideImg.style.opacity = "0";

      setTimeout(() => {
        slideImg.style.opacity = "1";
      }, 600);
    }
  };

  const handleSlideClick = (index) => {
    animationOpacity();
    setSlideIndex(index);
  };

  const handleScrollArrowRightClick = () => {
    const scrollContainer = document.getElementById("scroll-container");

    scrollContainer!.scrollBy({ left: SIZE__PROJECT__IMG, behavior: "smooth" });
  };

  const handleScrollArrowLeftClick = () => {
    const scrollContainer = document.getElementById("scroll-container");

    scrollContainer!.scrollBy({
      left: -SIZE__PROJECT__IMG,
      behavior: "smooth",
    });
  };

  const handleContactFormButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.style.overflow = "hidden";

    dispatch(setContactsForm(true));
  };

  useEffect(() => {
    dispatch(initProjects());

    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % SLIDER__LENGTH);
      animationOpacity();
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="HomePage">
      <div className="HomePage__top">
        <img
          id="slideImg"
          style={{
            backgroundImage: `url("banners/main-view${slideIndex}.jpg")`,
          }}
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

          <button
            onClick={() => handleContactFormButton()}
            className="HomePage__top__button"
          >
            Conversation
          </button>
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
                <span
                  onClick={() => setCategory(Category.EXTERIOR)}
                  className={cn("HomePage__categorys__category__list__link", {
                    "HomePage__categorys__category__list__link--active":
                      category === Category.EXTERIOR,
                  })}
                >
                  exterior
                </span>
              </li>

              <li className="HomePage__categorys__category__list__item">
                <span
                  onClick={() => setCategory(Category.INTERIOR)}
                  className={cn("HomePage__categorys__category__list__link", {
                    "HomePage__categorys__category__list__link--active":
                      category === Category.INTERIOR,
                  })}
                >
                  interior
                </span>
              </li>

              <li className="HomePage__categorys__category__list__item">
                <span
                  onClick={() => setCategory(Category.LANDSCAPE)}
                  className={cn("HomePage__categorys__category__list__link", {
                    "HomePage__categorys__category__list__link--active":
                      category === Category.LANDSCAPE,
                  })}
                >
                  landscape
                </span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleScrollArrowLeftClick()}
            className="HomePage__categorys__projects-list__button HomePage__categorys__projects-list__button--left"
          ></button>

          <RenderProjects visibleProjects={visibleProjects} />

          <button
            onClick={() => handleScrollArrowRightClick()}
            className="HomePage__categorys__projects-list__button HomePage__categorys__projects-list__button--right"
          ></button>
        </div>
      </div>

      <div className="HomePage__about-us__center">
        <div className="HomePage__about-us">
          <p className="HomePage__about-us__text">
            Our team works on residential, commercial, and corporate projects in
            Ukraine and Europe. We believe that beauty and craftsmanship is an
            individuality that is made up of details.
          </p>
        </div>
      </div>

      <div className="HomePage__portfolio__center">
        <div className="HomePage__portfolio">
          <div className="HomePage__categorys__title">
            <h2 className="HomePage__categorys__title__h2">Portfolio</h2>

            <Link className="HomePage__categorys__title__view-all" to={"/"}>
              view all
            </Link>
          </div>

          <RenderProjects
            visibleProjects={firstProjectsWith3Dtour}
            margin={true}
          />

          <RenderProjects
            visibleProjects={projects.slice(12, 18)}
            margin={true}
          />

          <div className="HomePage__portfolio__button__center">
            <button
              onClick={() => handleContactFormButton()}
              className="HomePage__portfolio__button"
            >
              conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
