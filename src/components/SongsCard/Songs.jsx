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
        <div className={`iContainer`}>
          <p className="objName">{name}</p>
          <p className="objType">Hindi</p>
        </div>
        <div className="images__c">
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
