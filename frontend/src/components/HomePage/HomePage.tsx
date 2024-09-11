import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../custom-hooks/reduxHooks.ts";
import {
  selectProjects,
  setContactsForm,
} from "../../redux/slices/projects.slice.ts";
import {
  DEBOUNCE__ANIMATION__MS,
  DEBOUNCE__SLIDE__MS,
  SIZE__PROJECT__IMG,
  SLIDER__LENGTH,
} from "../../utils/const.ts";
import { Category } from "../../types/categorys.ts";
import { RenderProjects } from "./RenderProjects/RenderProjects.tsx";
import { CategoryList } from "./CategoryList/CategoryList.tsx";

export const HomePage: React.FC = () => {
  const { projects, selectLanguage } = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState(Category.EXTERIOR);

  const visibleProjects = projects
    .filter((project) => project.category === category)
    .slice(0, 6)
    .reverse();

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

    const timeoutId = setTimeout(() => {
      setSlideIndex(index);
      clearTimeout(timeoutId);
    }, DEBOUNCE__ANIMATION__MS);
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
    const intervalId = setInterval(() => {
      animationOpacity();

      const timeoutId = setTimeout(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % SLIDER__LENGTH);
        clearTimeout(timeoutId);
      }, DEBOUNCE__ANIMATION__MS);
    }, DEBOUNCE__SLIDE__MS);

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
            <h1 className="HomePage__top__title">
              {selectLanguage.HomePageTitle}
            </h1>
            <p className="HomePage__top__sub-title">
              {selectLanguage.SubHomePage}
            </p>
          </div>

          <button
            onClick={() => handleContactFormButton()}
            className="HomePage__top__button"
          >
            {selectLanguage.buttonConversion}
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
              {selectLanguage.SelectedProjects}
            </h2>

            <Link className="HomePage__categorys__title__view-all" to={"/portfolio"}>
              {selectLanguage.viewAll}
            </Link>
          </div>

          <div className="HomePage__categorys__category">
            <CategoryList setCategory={setCategory} category={category} />
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
            {selectLanguage.mainHomePage}
          </p>
        </div>
      </div>

      <div className="HomePage__portfolio__center">
        <div className="HomePage__portfolio">
          <div className="HomePage__categorys__title">
            <h2 className="HomePage__categorys__title__h2">
              {selectLanguage.headerPortfolio}
            </h2>

            <Link className="HomePage__categorys__title__view-all" to={"/portfolio"}>
              {selectLanguage.viewAll}
            </Link>
          </div>

          <RenderProjects
            visibleProjects={firstProjectsWith3Dtour}
            margin={true}
          />

          <RenderProjects
            visibleProjects={projects.slice(13, 18)}
            margin={true}
          />

          <div className="HomePage__portfolio__button__center">
            <button
              onClick={() => handleContactFormButton()}
              className="HomePage__portfolio__button"
            >
             {selectLanguage.buttonConversion}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
