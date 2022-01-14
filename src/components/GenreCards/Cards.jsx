import React from "react";
import "./style.scss";
export default function GenreCard({
  cover,
  name,
  type,
  objIco,
  infoPos,
  icoPos,
  rawsvg = false,
}) {
  return (
    <div className="mContainer">
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
