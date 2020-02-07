import React from "react";

const ArticlesCardImg = ({ cardTitle, cardImg, cardSubtitle }) => {
  return (
    <div>
      <h3 className="heading heading__tertiary pt-3 text-center">
        {cardTitle}
      </h3>
      <img src={cardImg} alt={cardTitle} className="img-fluid pb-3 px-3" />
      <p className="text-center pb-4">{cardSubtitle}</p>
    </div>
  );
};

export default ArticlesCardImg;
