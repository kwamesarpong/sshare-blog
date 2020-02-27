import React from "react";
import ArticlesCardImg from "./ArticlesCardImg";

import cardImg1 from "../../assets/mind-and-body.png";
// import cardImg2 from "../../assets/motivation.png";
// import cardImg3 from "../../assets/Picture 15.png";
// import cardImg4 from "../../assets/Picture 19.png";
// import cardImg5 from "../../assets/Picture 24.png";
import { getCategoryTitle } from "./utilsfunctions";

const ArticlesCardSmall = ({ sideCategories }) => {
  const renderCategories = () => {
    return sideCategories.map(category => {
      return (
        <div key={category.id}>
          <ArticlesCardImg
            cardImg={cardImg1}
            // cardImg={category.img_url} // when real images are used
            cardTitle={getCategoryTitle(category.category)}
            cardSubtitle={category.title}
          />
        </div>
      );
    });
  };

  return (
    <div className="col-md-3">
      <div className="articles__small">
        <div className="container">{renderCategories()}</div>
      </div>
    </div>
  );
};

export default ArticlesCardSmall;
