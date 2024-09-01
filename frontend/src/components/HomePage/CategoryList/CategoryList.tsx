import React from "react";
import { Category } from "../../../types/categorys.ts";
import cn from "classnames";

interface Props {
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
  category: string;
  all?: boolean;
}

export const CategoryList: React.FC<Props> = ({
  setCategory,
  category,
  all = false,
}) => {
  return (
    <ul className="HomePage__categorys__category__list">
      {all && (
        <li className="HomePage__categorys__category__list__item">
          <span
            onClick={() => setCategory(Category.ALL)}
            className={cn("HomePage__categorys__category__list__link", {
              "HomePage__categorys__category__list__link--active":
                category === Category.ALL,
            })}
          >
            all
          </span>
        </li>
      )}

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
  );
};
