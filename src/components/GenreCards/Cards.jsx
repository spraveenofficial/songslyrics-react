import React from "react";
import { useNavigate } from "react-router-dom";
export default function GenreCard({
  cover,
  name,
  type,
  objIco,
  infoPos,
  icoPos,
  path,
  rawsvg = false,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="mContainer"
      onClick={() => {
        navigate(path);
      }}
    >
      <img className="cover" src={cover} alt="cover" />

      {rawsvg ? (
        <img src={objIco} className={`${icoPos} objSvg`} alt={name} />
      ) : (
        <i className={`${objIco} ${icoPos} objIcon`}></i>
      )}

      <div className={`${infoPos} iContainer`}>
        <p className="objName">{name}</p>
        <p className="objType">{type}</p>
      </div>
    </div>
  );
}
