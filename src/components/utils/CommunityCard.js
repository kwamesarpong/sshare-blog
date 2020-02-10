import React from "react";

const CommunityCard = ({ name, country, img, message }) => {
  return (
    <div className="col-md-4">
      <div className="community__border">
        <div className="community__card">
          <img src={img} alt="contributor" className="community__card-img" />
          <p className="community__card-title">{name}</p>
          <p className="community__card-subtitle">{country}</p>
        </div>
        <p className="mt-4 community__text">{message}</p>
      </div>
    </div>
  );
};

export default CommunityCard;
