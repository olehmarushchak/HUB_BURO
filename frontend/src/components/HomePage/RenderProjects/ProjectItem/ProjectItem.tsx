import React from "react";
import { Link } from "react-router-dom";
import { Projects } from "../../../../types/projects.type";
import cn from "classnames";

interface Props {
  project: Projects;
  marginZero?: boolean;
}

export const ProjectItem: React.FC<Props> = ({
  project,
  marginZero = false,
}) => {
  return (
    <Link
      key={project.id}
      className={cn("HomePage__categorys__projects-list__project", {
        margin__zero: marginZero,
      })}
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
  );
};
