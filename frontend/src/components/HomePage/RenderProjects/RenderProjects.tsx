import React from "react";
import { PreloadStyleForTale } from "../PeloadStyleForTale/PreloadStyleForTale.tsx";
import { Projects } from "../../../types/projects.type";
import { Link } from "react-router-dom";
import cn from "classnames";

interface Props {
  visibleProjects: Projects[];
  margin?: boolean;
}

export const RenderProjects: React.FC<Props> = ({
  visibleProjects,
  margin,
}) => {
  return (
    <ul
      id="scroll-container"
      className={cn("HomePage__categorys__projects-list", {
        "margin-bottom": margin,
      })}
    >
      {!visibleProjects.length &&
        [1, 2, 3, 4, 5].map((element) => <PreloadStyleForTale key={element} />)}
      {visibleProjects.map((project) => (
        <Link
          key={project.id}
          className="HomePage__categorys__projects-list__project"
          to={"/:id"}
        >
          <li>
            <div className="HomePage__categorys__projects-list__img__container">
                <img
                  className="HomePage__categorys__projects-list__img"
                  src={project.mainimg}
                  alt="img"
                />
            </div>

            <h3 className="HomePage__categorys__projects-list__title">
              {project.title}
            </h3>
          </li>
        </Link>
      ))}
    </ul>
  );
};
