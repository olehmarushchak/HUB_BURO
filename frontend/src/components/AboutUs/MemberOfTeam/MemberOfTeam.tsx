import React from "react";

interface Props {
  name: string;
  photo: string;
  role: string;
}

export const MemberOfTeam: React.FC<Props> = ({name, photo, role}) => {
  return (
    <li className="AboutUs__bottom__team__member">
      <img className="AboutUs__bottom__team__member__photo" src={photo} alt="" />

      <div className="AboutUs__bottom__team__member__info">
        <h3 className="AboutUs__bottom__team__member__info__name">{name}</h3>

        <p className="AboutUs__bottom__team__member__info__role">{role}</p>
      </div>
    </li>
  );
};
