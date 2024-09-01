import React, { useState } from "react";
import { CategoryList } from "../HomePage/CategoryList/CategoryList.tsx";
import { Category } from "../../types/categorys.ts";
import { useAppSelector } from "../../custom-hooks/reduxHooks.ts";
import { selectProjects } from "../../redux/slices/projects.slice.ts";
import "./Portfolio.scss";
import { ProjectItem } from "../HomePage/RenderProjects/ProjectItem/ProjectItem.tsx";
import { PreloadStyleForTale } from "../HomePage/PeloadStyleForTale/PreloadStyleForTale.tsx";

export const Portfolio: React.FC = () => {
  const { projects } = useAppSelector(selectProjects);

  const [category, setCategory] = useState(Category.EXTERIOR);

  const visibleProjects = projects.filter(
    (project) => project.category === category
  );

  return (
    <div className="Portfolio__center">
      <section className="Portfolio">
        <h2 className="Portfolio__title">Portfolio</h2>

        <div className="Portfolio__categorys">
          <CategoryList setCategory={setCategory} category={category} />
        </div>

        <div className="Portfolio__projects">
          {!visibleProjects.length &&
            [1, 2, 3, 4, 5, 6].map((element) => (
              <PreloadStyleForTale key={element} />
            ))}

          {visibleProjects.map((project) => (
            <ProjectItem project={project} marginZero={true} />
          ))}
        </div>
      </section>
    </div>
  );
};
