import React from "react";
import { useNavigate } from "react-router-dom";
export default function GenreCard({
  cover,
  name,
  type,
  objIco,
  infoPos,
  year,
  path,
  rawsvg = true,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="mContainers"
      onClick={() => {
        navigate(path);
      }}
    >
      <div className="content__song">
        <div className="iContainer">
          <p className="objName">{name}</p>
          <div className="data__card">
            <p className="objType">{type}</p>
            <p className="objType">{year}</p>
          </div>
        </div>
      </div>
      <div className="ssss">
        <img src={cover} alt="" />
      </div>
    </div>
  );
}
