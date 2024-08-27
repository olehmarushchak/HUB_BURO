import React from "react";
import { Loader } from "../../Loeader/Loader.tsx";
import './PreloadStyleForTale.scss';

export const PreloadStyleForTale: React.FC = () => {
  return (
    <li className="PreloadStyleForTale">
      <Loader />
      <span className="PreloadStyleForTale__title"></span>
    </li>
  );
};
