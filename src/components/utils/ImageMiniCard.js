import React from "react";

const ImageMiniCard = ({ title, imgNum }) => {
  return (
    <div className="col-6 col-lg-2 col-md-4">
      <div className={`category__image category__image-${imgNum} img-fluid`}>
        <h6 className="category__image-text">{title}</h6>
      </div>
    </div>
  );
};

export default ImageMiniCard;
